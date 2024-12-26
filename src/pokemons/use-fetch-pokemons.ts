import { APIPaginationResponse } from "@/api/api-types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { PokemonsListResults } from "./pokemons-types";
import { fetchPokemonAPI } from "@/api/api";
import { API_BASE_URL } from "@/api/api-constants";

const POKEMON_PER_PAGE = 60;

export type FetchPokemonsAPIResponse =
  APIPaginationResponse<PokemonsListResults>;

export const useFetchPokemons = () => {
  const query = useInfiniteQuery({
    queryKey: ["pokemons", "list"],
    queryFn: async (context) => {
      const response = await fetchPokemonAPI<FetchPokemonsAPIResponse>(
        context.pageParam,
      );

      return response;
    },
    getNextPageParam: (lastPage) => lastPage.next,
    initialPageParam: `${API_BASE_URL}/pokemon/?limit=${POKEMON_PER_PAGE}&offset=0`,
  });

  return query;
};
