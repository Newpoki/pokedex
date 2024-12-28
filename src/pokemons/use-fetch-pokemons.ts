import { APIPaginationResponse } from "@/api/api-types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { PokemonsListFilters, PokemonsListResults } from "./pokemons-types";
import { fetchPokemonAPI } from "@/api/api";
import { API_BASE_URL } from "@/api/api-constants";
import { useMemo } from "react";

const POKEMON_PER_PAGE = 70;

export type FetchPokemonsAPIResponse =
  APIPaginationResponse<PokemonsListResults>;

type UseFetchPokemonsParams = {
  filters: PokemonsListFilters;
};

const parseLimitAndOffsetFromURL = (url: string) => {
  const matches = url.match(/[?&]offset=(\d+).*?[?&]limit=(\d+)/);

  const [_completeMatch, matchedOffset, matchedLimit] = matches ?? [];

  return matchedOffset == null || matchedLimit == null
    ? null
    : {
        offset: parseInt(matchedOffset, 10),
        limit: parseInt(matchedLimit, 10),
      };
};

// TODO: Add some heacvy tests
export const useFetchPokemons = ({ filters }: UseFetchPokemonsParams) => {
  // Removing 1 because ranges starts at 1 as it represents the pokemon ids
  const initialOffset =
    filters.sort.direction === "ASC"
      ? filters.idsRange[0] - 1
      : filters.idsRange[1] - POKEMON_PER_PAGE;

  const initialLimit = useMemo(() => {
    if (filters.sort.direction === "ASC") {
      return initialOffset + POKEMON_PER_PAGE > filters.idsRange[1]
        ? filters.idsRange[1]
        : POKEMON_PER_PAGE;
    }

    return initialOffset + POKEMON_PER_PAGE > filters.idsRange[1]
      ? filters.idsRange[1] - initialOffset
      : POKEMON_PER_PAGE;
  }, [filters.idsRange, filters.sort.direction, initialOffset]);

  const query = useInfiniteQuery({
    queryKey: ["pokemons", "list", filters.idsRange, filters.sort.direction],
    queryFn: async (context) => {
      const response = await fetchPokemonAPI<FetchPokemonsAPIResponse>(
        context.pageParam,
      );

      if (filters.sort.direction === "DESC") {
        return { ...response, results: [...response.results].reverse() };
      }

      return response;
    },

    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (filters.sort.direction === "ASC") {
        if (lastPage.next == null) {
          return null;
        }

        const parsedURL = parseLimitAndOffsetFromURL(lastPage.next);

        if (parsedURL == null || parsedURL.offset === filters.idsRange[1]) {
          return null;
        }

        const limit =
          parsedURL.offset + POKEMON_PER_PAGE > filters.idsRange[1]
            ? filters.idsRange[1] - parsedURL.offset
            : parsedURL.limit;

        return `${API_BASE_URL}/pokemon/?offset=${parsedURL.offset}&limit=${limit}`;
      }

      const parsedURL = parseLimitAndOffsetFromURL(lastPageParam);

      if (parsedURL == null || parsedURL.offset === filters.idsRange[0] - 1) {
        return null;
      }

      const offset =
        parsedURL.offset - POKEMON_PER_PAGE <= filters.idsRange[0]
          ? filters.idsRange[0] - 1
          : parsedURL.offset - POKEMON_PER_PAGE;

      const limit = parsedURL.offset - offset;

      return `${API_BASE_URL}/pokemon/?offset=${offset}&limit=${limit}`;
    },
    initialPageParam: `${API_BASE_URL}/pokemon/?offset=${initialOffset}&limit=${initialLimit}`,
  });

  return query;
};
