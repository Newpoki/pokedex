import { useQuery } from "react-query";
import { pokemonQueryKeys } from "../pokemon-constants";
import { Pokemon } from "../typings";

export const useFetchPokemon = (pokemonAPIUrl: string) => {
  return useQuery<Pokemon>(pokemonQueryKeys.pokemon(pokemonAPIUrl), async () => {
    const response = await fetch(pokemonAPIUrl);
    const data = await response.json();

    return data;
  });
};
