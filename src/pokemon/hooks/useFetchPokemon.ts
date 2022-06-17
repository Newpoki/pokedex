import { useQuery } from "react-query";
import { pokemonQueryKeys } from "../pokemon-constants";
import { Pokemon } from "../typings";
import { getFetchPokemonUrl } from "../utils/getFetchPokemonUrl";

/**
 * It's called `pokemonName` but it would also work with the pokemon's id.
 * It's better to use the name, because we already cached the pokemon data with its name
 * when fetching inside the list
 */
export const useFetchPokemon = (pokemonName: string | undefined) => {
  return useQuery<Pokemon>(
    pokemonQueryKeys.pokemon(pokemonName),
    async () => {
      // It's safe to cast as string as we're in the query ONLY if there is a pokemon name thanks to the enabled condition
      const url = getFetchPokemonUrl(pokemonName as string);
      const response = await fetch(url);
      const data = await response.json();

      return data;
    },
    {
      enabled: Boolean(pokemonName),
    }
  );
};
