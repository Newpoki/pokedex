import { useQuery } from "react-query";
import { pokemonQueryKeys } from "../pokemon-constants";
import { PokemonSpecies } from "../typings";

/**
 * It's called `pokemonName` but it would also work with the pokemon's id.
 * It's better to use the name, because we already cached the pokemon's species data with its name
 */
export const useFetchPokemonSpecies = (pokemonName: string | undefined) => {
  return useQuery<PokemonSpecies>(
    pokemonQueryKeys.pokemonSpecies(pokemonName),
    async () => {
      // It's safe to cast as string as we're in the query ONLY if there is a pokemon name thanks to the enabled condition
      const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`;
      const response = await fetch(url);
      const data = await response.json();

      return data;
    },
    { enabled: Boolean(pokemonName) }
  );
};
