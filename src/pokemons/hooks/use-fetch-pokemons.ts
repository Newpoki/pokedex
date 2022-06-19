import { useInfiniteQuery } from "react-query";
import { pokemonsQueryKeys } from "../pokemons-constants";
import { PokemonList } from "../typings";

export const useFetchPokemons = () => {
  return useInfiniteQuery<PokemonList>(
    pokemonsQueryKeys.list(),
    async ({ pageParam }) => {
      const url = pageParam ?? `https://pokeapi.co/api/v2/pokemon`;

      const response = await fetch(url);
      const data = await response.json();

      return data;
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (!lastPage.next) {
          return undefined;
        }

        return lastPage.next;
      },
    }
  );
};
