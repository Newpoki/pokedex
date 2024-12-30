import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { PokemonAbility } from "./pokemon-types";
import { abilityQueryOptions } from "@/ability/ability-query-options";
import { useMemo } from "react";

export const useFetchPokemonAbilities = (
  pokemonName: string,
  pokemonAbilities: PokemonAbility[],
) => {
  const queryClient = useQueryClient();

  const { data } = useSuspenseQuery({
    queryKey: ["pokemon", "abilities", pokemonName],
    queryFn: async () => {
      // Fetching for each pokemon ability, the whole data
      // and adding some others informations that are specific to the pokemon
      const abilitiesPromises = pokemonAbilities.map(async (ability) => {
        const abilityData = await queryClient.ensureQueryData(
          abilityQueryOptions(ability.ability.name),
        );

        return {
          ...abilityData,
          slot: ability.slot,
          isHidden: ability.is_hidden,
        };
      });

      const response = await Promise.all(abilitiesPromises);

      return response;
    },
  });

  return useMemo(() => ({ data }), [data]);
};
