import { APIPaginationResponse } from "@/api/api-types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PokemonsListFilters, PokemonsListResults } from "./pokemons-types";
import { fetchPokemonAPI } from "@/api/api";
import { Pokemon, PokemonType } from "@/pokemon/pokemon-types";

export type FetchPokemonsAPIResponse =
  APIPaginationResponse<PokemonsListResults>;

type UseFetchPokemonsParams = {
  filters: PokemonsListFilters;
};

export const useFetchPokemons = ({ filters }: UseFetchPokemonsParams) => {
  const queryClient = useQueryClient();

  const query = useQuery({
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
          //   TODO: Create reusable function here and for use-fetch-pokemon
          queryFn: async () => {
            const response = await fetchPokemonAPI<Pokemon>(
              `/pokemon/${pokemon.name}`,
            );

            return response;
          },
        });

        return cachedPokemonData;
      });

      return await Promise.all(pokemonsData);
    },
    select: (data) => {
      const filtered = data.reduce<Pokemon[]>((acc, pokemon) => {
        const matchesAtLeastOneTypeFromFilters = pokemon.types.some(
          (pokemonType: PokemonType) =>
            filters.types.findIndex(
              (typeName) => typeName === pokemonType.type.name,
            ) !== -1,
        );

        if (!matchesAtLeastOneTypeFromFilters) {
          return acc;
        }

        acc.push(pokemon);

        return acc;
      }, []);

      const sortDirection = filters.sort.direction;

      return sortDirection === "ASC" ? filtered : [...filtered].reverse();
    },
  });

  return query;
};
