import { useInfiniteQuery } from "react-query";
import { PokemonList } from "../typings";

export const useFetchPokemons = () => {
  return useInfiniteQuery<PokemonList>(
    "pokemons",
    async ({ pageParam }) => {
      const url = pageParam ?? `https://pokeapi.co/api/v2/pokemon/?limit=60`;

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
