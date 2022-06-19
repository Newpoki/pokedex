import { useQuery } from "react-query";
import { eggGroupQueryKeys } from "../egg-group-constants";
import { EggGroup } from "../typings";

export const useFetchEggGroup = (pokemonEggGroupName: string | undefined) => {
  return useQuery<EggGroup>(
    eggGroupQueryKeys.pokemonEggGroup(pokemonEggGroupName),
    async () => {
      const url = `https://pokeapi.co/api/v2/egg-group/${pokemonEggGroupName}`;

      // It's safe to cast as string as we're in the query ONLY if there is a pokemon name thanks to the enabled condition
      const response = await fetch(url);
      const data = await response.json();

      return data;
    },
    { enabled: Boolean(pokemonEggGroupName) }
  );
};
