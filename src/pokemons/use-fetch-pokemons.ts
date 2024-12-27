import { APIPaginationResponse } from "@/api/api-types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { PokemonsListFilters, PokemonsListResults } from "./pokemons-types";
import { fetchPokemonAPI } from "@/api/api";
import { API_BASE_URL } from "@/api/api-constants";

const POKEMON_PER_PAGE = 60;

export type FetchPokemonsAPIResponse =
  APIPaginationResponse<PokemonsListResults>;

type UseFetchPokemonsParams = {
  filters: PokemonsListFilters;
};
export const useFetchPokemons = ({ filters }: UseFetchPokemonsParams) => {
  // Removing 1 because ranges starts at 1 as it represents the pokemon ids
  const initialOffset = filters.idsRange[0] - 1;

  const initialLimit =
    initialOffset + POKEMON_PER_PAGE > filters.idsRange[1]
      ? filters.idsRange[1]
      : POKEMON_PER_PAGE;

  const query = useInfiniteQuery({
    queryKey: ["pokemons", "list", filters.idsRange],
    queryFn: async (context) => {
      const response = await fetchPokemonAPI<FetchPokemonsAPIResponse>(
        context.pageParam,
      );

      return response;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.next == null) {
        return null;
      }

      const matches = lastPage.next.match(/[?&]offset=(\d+).*?[?&]limit=(\d+)/);

      const nextUrlOffset =
        matches && matches[1] ? parseInt(matches[1], 10) : null;
      const nextUrlLimit =
        matches && matches[2] ? parseInt(matches[2], 10) : null;

      if (
        nextUrlOffset == null ||
        nextUrlLimit == null ||
        // We don't want to fetch more if the next offset overlapse the ids range
        nextUrlOffset === filters.idsRange[1]
      ) {
        return null;
      }

      // Reducing limit so that we never overflow on the range ids limit
      // Returning null ensure the "hasNextPage" will be false
      const limit =
        nextUrlOffset + POKEMON_PER_PAGE > filters.idsRange[1]
          ? filters.idsRange[1] - nextUrlOffset
          : nextUrlLimit;

      return lastPage.next.replace(`${nextUrlLimit}`, `${limit}`);
    },
    initialPageParam: `${API_BASE_URL}/pokemon/?limit=${initialLimit}&offset=${initialOffset}`,
  });

  return query;
};
