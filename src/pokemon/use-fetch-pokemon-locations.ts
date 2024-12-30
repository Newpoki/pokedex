import { pokedexQueryOptions } from "@/pokedex/pokedex-query-options";
import { PokemonSpeciesDexEntry } from "@/pokemon-species/pokemon-species.types";
import { versionGroupQueryOptions } from "@/version-groups/version-group-query-options";
import { versionQueryOptions } from "@/version/version-query-options";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useMemo } from "react";

type MappedPokemonPokedexesByName = Record<string, PokemonSpeciesDexEntry>;

export const useFetchPokemonLocations = (
  pokemonName: string,
  pokemonPokedexes: PokemonSpeciesDexEntry[],
) => {
  const queryClient = useQueryClient();

  const mappedPokemonPokedexesByName =
    pokemonPokedexes.reduce<MappedPokemonPokedexesByName>((acc, pokedex) => {
      acc[pokedex.pokedex.name] = pokedex;

      return acc;
    }, {});

  const { data } = useSuspenseQuery({
    queryKey: ["pokemon", "locations", pokemonName],
    queryFn: async () => {
      const pokedexesPromises = pokemonPokedexes.map((pokedex) =>
        queryClient.ensureQueryData(pokedexQueryOptions(pokedex.pokedex.name)),
      );

      // We want to get the pokemon pokedex number in main each series
      // So there is no sense to fetch the national pokedex
      // As it's not linked a a game series but to all games
      const pokedexes = (await Promise.all(pokedexesPromises)).filter(
        (pokedex) => pokedex.is_main_series && pokedex.name !== "national",
      );

      const pokedexesVersionsPromises = pokedexes.map(async (pokedex) => {
        const versionsGroups = await Promise.all(
          pokedex.version_groups.map((versionGroup) =>
            queryClient.ensureQueryData(
              versionGroupQueryOptions(versionGroup.name),
            ),
          ),
        );

        const versions = await Promise.all(
          versionsGroups.map(async (versionGroup) => {
            return await Promise.all(
              versionGroup.versions.map((version) =>
                queryClient.ensureQueryData(versionQueryOptions(version.name)),
              ),
            );
          }),
        );

        const formatedEntryNumber =
          `${mappedPokemonPokedexesByName[pokedex.name]?.entry_number}`.padStart(
            3,
            "0",
          );

        return {
          versions,
          entryNumber: formatedEntryNumber,
          pokedexId: pokedex.id,
        };
      });

      const pokedexesVersions = await Promise.all(pokedexesVersionsPromises);

      const flattenPokedexesVersions = pokedexesVersions.map(
        (pokedexVersions) => {
          return {
            ...pokedexVersions,
            versions: pokedexVersions.versions.flat(),
          };
        },
      );

      return flattenPokedexesVersions;
    },
  });

  return useMemo(() => ({ data }), [data]);
};
