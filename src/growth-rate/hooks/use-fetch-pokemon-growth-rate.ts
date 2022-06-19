import { useQuery } from "react-query";
import { growthRateQueryKeys } from "../growth-rate-constants";
import { GrowthRate } from "../typings";

export const useFetchPokemonGrowthRate = (pokemonNameOrId: string | undefined) => {
  return useQuery<GrowthRate>(
    growthRateQueryKeys.pokemonGrowthRate(pokemonNameOrId),
    async () => {
      const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonNameOrId}`;

      // It's safe to cast as string as we're in the query ONLY if there is a pokemon name thanks to the enabled condition
      const response = await fetch(url);
      const data = await response.json();

      return data;
    },
    { enabled: Boolean(pokemonNameOrId) }
  );
};
