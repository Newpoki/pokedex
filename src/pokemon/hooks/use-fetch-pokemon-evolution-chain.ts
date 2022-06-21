import { useQuery } from "react-query";
import { pokemonQueryKeys } from "../pokemon-constants";
import { PokemonEvolutionChain } from "../typings";

export const useFetchPokemonEvolutionChain = (evolutionChainUrl: string | undefined) => {
  return useQuery<PokemonEvolutionChain>(
    pokemonQueryKeys.pokemonEvolutionChain(evolutionChainUrl),
    async () => {
      if (!evolutionChainUrl) {
        return undefined;
      }

      const response = await fetch(evolutionChainUrl);
      const data = await response.json();

      return data;
    },
    {
      enabled: Boolean(evolutionChainUrl),
    }
  );
};
