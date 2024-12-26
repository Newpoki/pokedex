import { APIPaginationResponse } from "@/api/api-types";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { PokemonsListResults } from "./pokemons-types";
import { fetchPokemonAPI } from "@/api/api";

export const useFetchPokemons = () => {
  const { data, isPending } = useQuery({
    queryKey: ["pokemons", "list"],
    queryFn: async () => {
      const response =
        await fetchPokemonAPI<APIPaginationResponse<PokemonsListResults>>(
          "/pokemon",
        );

      return response;
    },
  });

  return useMemo(
    () => ({
      data,
      isPending,
    }),
    [data, isPending],
  );
};
