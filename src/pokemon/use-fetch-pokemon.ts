import { useSuspenseQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchPokemonData } from "./utils/fetch-pokemon-data";

type UseFetchPokemonParams = {
  name: string;
};

export const useFetchPokemon = ({ name }: UseFetchPokemonParams) => {
  const { data } = useSuspenseQuery({
    queryKey: ["pokemon", name],
    queryFn: async () => {
      const response = await fetchPokemonData({ name });

      return response;
    },
  });

  return useMemo(() => data, [data]);
};
