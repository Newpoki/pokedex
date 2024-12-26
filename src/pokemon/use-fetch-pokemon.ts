import { useSuspenseQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchPokemonAPI } from "@/api/api";
import { Pokemon } from "./pokemon-types";

type UseFetchPokemonParams = {
  name: string;
};

export const useFetchPokemon = ({ name }: UseFetchPokemonParams) => {
  const { data } = useSuspenseQuery({
    queryKey: ["pokemon", name],
    queryFn: async () => {
      const response = await fetchPokemonAPI<Pokemon>(`/pokemon/${name}`);

      return response;
    },
  });

  return useMemo(() => ({ pokemon: data }), [data]);
};
