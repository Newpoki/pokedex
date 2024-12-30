import { fetchPokemonAPI } from "@/api/api";
import { queryOptions } from "@tanstack/react-query";
import { Pokedex } from "./pokedex-types";

export const pokedexQueryOptions = (name: string) =>
  queryOptions({
    queryKey: ["pokedex", name],
    queryFn: async () => {
      const pokedex = await fetchPokemonAPI<Pokedex>(`/pokedex/${name}`);

      return pokedex;
    },
  });
