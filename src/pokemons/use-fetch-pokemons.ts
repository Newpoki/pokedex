import { APIPaginationResponse } from "@/api/api-types";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { PokemonsListFilters, PokemonsListResults } from "./pokemons-types";
import { fetchPokemonAPI } from "@/api/api";
import { PokemonAPIResponse, PokemonType } from "@/pokemon/pokemon-types";
import { fetchPokemonData } from "@/pokemon/utils/fetch-pokemon-data";

export type FetchPokemonsAPIResponse =
  APIPaginationResponse<PokemonsListResults>;

type UseFetchPokemonsParams = {
  filters: PokemonsListFilters;
};

export const useFetchPokemons = ({ filters }: UseFetchPokemonsParams) => {
  const queryClient = useQueryClient();

  const query = useSuspenseQuery({
    queryKey: ["pokemons", "list", filters.idsRange[1], filters.idsRange[0]],
    queryFn: async () => {
      // Removing 1 from offset as the offset starts at 1
      const offset = filters.idsRange[0] - 1;
      const limit = filters.idsRange[1] - offset;

      const response = await fetchPokemonAPI<FetchPokemonsAPIResponse>(
        `/pokemon/?offset=${offset}&limit=${limit}`,
      );

      const pokemonsData = response.results.map((pokemon) => {
        const cachedPokemonData = queryClient.ensureQueryData({
          queryKey: ["pokemon", pokemon.name],
          queryFn: async () => {
            const response = await fetchPokemonData({ name: pokemon.name });

            return response;
          },
        });

        return cachedPokemonData;
      });

      return await Promise.all(pokemonsData);
    },
    select: (data) => {
      const filtered = data.reduce<PokemonAPIResponse[]>(
        (acc, { pokemon, displayedName }) => {
          const matchesAtLeastOneTypeFromFilters =
            filters.types.length === 0
              ? true
              : pokemon.types.some(
                  (pokemonType: PokemonType) =>
                    filters.types.findIndex(
                      (typeName) => typeName === pokemonType.type.name,
                    ) !== -1,
                );

          if (!matchesAtLeastOneTypeFromFilters) {
            return acc;
          }

          const matchesSearch =
            filters.search === ""
              ? true
              : displayedName
                  .toLocaleLowerCase()
                  .includes(filters.search.toLocaleLowerCase()) ||
                `${pokemon.id}` === filters.search;

          if (!matchesSearch) {
            return acc;
          }

          acc.push(pokemon);

          return acc;
        },
        [],
      );

      const sortDirection = filters.sort.direction;

      const sortedArray =
        sortDirection === "ASC" ? filtered : [...filtered].reverse();

      return {
        count: sortedArray.length,
        results: sortedArray,
      };
    },
  });

  return query;
};
