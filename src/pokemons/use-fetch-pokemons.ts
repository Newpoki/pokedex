import { APIPaginationResponse } from "@/api/api-types";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import {
  PokemonsListFilters,
  PokemonsListSort,
  PokemonsListResults,
} from "./pokemons-types";
import { fetchPokemonAPI } from "@/api/api";
import { Pokemon } from "@/pokemon/pokemon-types";
import { getSortedPokemonsList } from "./utils/get-sorted-pokemons-list";
import { useMemo } from "react";
import { getFilteredPokemonsList } from "./utils/get-filtered-pokemons-list";
import { pokemonQueryOptions } from "@/pokemon/pokemon-query-options";

export type FetchPokemonsAPIResponse =
  APIPaginationResponse<PokemonsListResults>;

type UseFetchPokemonsParams = {
  filters: PokemonsListFilters;
  sort: PokemonsListSort;
};

export const useFetchPokemons = ({ filters, sort }: UseFetchPokemonsParams) => {
  const queryClient = useQueryClient();

  const query = useSuspenseQuery({
    queryKey: [
      "pokemons",
      "list",
      filters.idsRange[1],
      filters.idsRange[0],
      filters,
      sort,
    ],
    queryFn: async () => {
      // Removing 1 from offset as the offset starts at 1
      const offset = filters.idsRange[0] - 1;
      const limit = filters.idsRange[1] - offset;

      const response = await fetchPokemonAPI<FetchPokemonsAPIResponse>(
        `/pokemon/?offset=${offset}&limit=${limit}`,
      );

      const pokemonsData = response.results.map<Promise<Pokemon>>((pokemon) => {
        const cachedPokemonData = queryClient.ensureQueryData(
          pokemonQueryOptions(pokemon.name),
        );

        return cachedPokemonData;
      });

      const data = await Promise.all(pokemonsData);

      // IMPORTANT
      // This should take place in the select, but as we have a lot of re-render where the hook is called
      // And we're doing heavy computation, we must keep this part within the queryFN.
      // This way, filtering and sorting is not re-performed unless the query keys change
      const filteredData = getFilteredPokemonsList({ data, filters });

      const sortedData = getSortedPokemonsList({
        data: filteredData,
        sort,
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
