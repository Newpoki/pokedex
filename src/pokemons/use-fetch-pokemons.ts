import { APIPaginationResponse } from "@/api/api-types";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { PokemonsListFilters, PokemonsListResults } from "./pokemons-types";
import { fetchPokemonAPI } from "@/api/api";
import { Pokemon } from "@/pokemon/pokemon-types";
import { fetchPokemonData } from "@/pokemon/utils/fetch-pokemon-data";
import { getSortedPokemonsList } from "./utils/get-sorted-pokemons-list";
import { useMemo } from "react";
import { getFilteredPokemonsList } from "./utils/get-filtered-pokemons-list";

export type FetchPokemonsAPIResponse =
  APIPaginationResponse<PokemonsListResults>;

type UseFetchPokemonsParams = {
  filters: PokemonsListFilters;
};

export const useFetchPokemons = ({ filters }: UseFetchPokemonsParams) => {
  const queryClient = useQueryClient();

  const query = useSuspenseQuery({
    queryKey: [
      "pokemons",
      "list",
      filters.idsRange[1],
      filters.idsRange[0],
      filters.sort,
      filters,
    ],
    queryFn: async () => {
      // Removing 1 from offset as the offset starts at 1
      const offset = filters.idsRange[0] - 1;
      const limit = filters.idsRange[1] - offset;

      const response = await fetchPokemonAPI<FetchPokemonsAPIResponse>(
        `/pokemon/?offset=${offset}&limit=${limit}`,
      );

      const pokemonsData = response.results.map<Promise<Pokemon>>((pokemon) => {
        const cachedPokemonData = queryClient.ensureQueryData({
          queryKey: ["pokemon", pokemon.name],
          queryFn: async () => {
            const response = await fetchPokemonData({ name: pokemon.name });

            return response;
          },
        });

        return cachedPokemonData;
      });

      const data = await Promise.all(pokemonsData);

      // IMPORTANT
      // This should take place in the select, but as we have a lot of re-render where it's called
      // And we're doing heavy computation, we must keep this part within the queryFN.
      // This way, filtering and sorting is not re-poerformed unless the query keys change
      const filteredData = getFilteredPokemonsList({ data, filters });

      const sortedData = getSortedPokemonsList({
        data: filteredData,
        sort: filters.sort,
      });

      return {
        count: sortedData.length,
        results: sortedData,
      };
    },
  });

  return useMemo(
    () => ({
      data: query.data,
    }),
    [query.data],
  );
};
