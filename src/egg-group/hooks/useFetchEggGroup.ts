import { useQuery } from "react-query";
import { eggGroupQueryKeys } from "../egg-group-constants";
import { EggGroup } from "../typings";

export const useFetchEggGroup = (pokemonEggGroupUrl: string | undefined) => {
  return useQuery<EggGroup>(
    eggGroupQueryKeys.pokemonEggGroup(pokemonEggGroupUrl),
    async () => {
      if (!pokemonEggGroupUrl) return undefined;

      // It's safe to cast as string as we're in the query ONLY if there is a pokemon name thanks to the enabled condition
      const response = await fetch(pokemonEggGroupUrl);
      const data = await response.json();

      return data;
    },
    { enabled: Boolean(pokemonEggGroupUrl) }
  );
};
