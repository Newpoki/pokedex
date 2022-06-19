import { useQuery } from "react-query";
import { pokemonQueryKeys } from "../pokemon-constants";
import { Pokemon } from "../typings";

/**
 * It's called `pokemonName` but it would also work with the pokemon's id.
 * It's better to use the name, because we already cached the pokemon data with its name
 * when fetching inside the list
 */
export const useFetchPokemon = (pokemonName: string | undefined) => {
  return useQuery<Pokemon>(
    pokemonQueryKeys.pokemon(pokemonName),
    async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
      const response = await fetch(url);
      const data = await response.json();

      return data;
    },
    { enabled: Boolean(pokemonName) }
  );
};
