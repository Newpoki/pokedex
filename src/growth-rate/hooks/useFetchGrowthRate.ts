import { useQuery } from "react-query";
import { growthRateQueryKeys } from "../growth-rate-constants";
import { GrowthRate } from "../typings";

export const useFetchPokemonGrowthRate = (pokemonGrowthRateUrl: string | undefined) => {
  return useQuery<GrowthRate>(
    growthRateQueryKeys.pokemonGrowthRate(pokemonGrowthRateUrl),
    async () => {
      if (!pokemonGrowthRateUrl) return undefined;

      // It's safe to cast as string as we're in the query ONLY if there is a pokemon name thanks to the enabled condition
      const response = await fetch(pokemonGrowthRateUrl);
      const data = await response.json();

      return data;
    },
    { enabled: Boolean(pokemonGrowthRateUrl) }
  );
};
