import { fetchPokemonAPI } from "@/api/api";
import { queryOptions } from "@tanstack/react-query";
import { EvolutionChain } from "./evolution-chain-types";

export const evolutionChainQueryOptions = (url: string) =>
  queryOptions({
    queryKey: ["evolution-chain", url],
    queryFn: async () => {
      const evolutionChain = await fetchPokemonAPI<EvolutionChain>(url);

      return evolutionChain;
    },
  });
