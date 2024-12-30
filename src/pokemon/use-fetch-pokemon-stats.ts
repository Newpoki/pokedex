import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { PokemonStat } from "./pokemon-types";
import { statQueryOptions } from "@/stat/stat-query-options";
import { useMemo } from "react";

export const useFetchPokemonStats = (
  pokemonName: string,
  pokemonStats: PokemonStat[],
) => {
  const queryClient = useQueryClient();

  const { data } = useSuspenseQuery({
    queryKey: ["pokemon", "stats", pokemonName],
    queryFn: async () => {
      // Fetching for each pokemon stat, the whole data
      // and adding some others informations that are specific to the pokemon
      const statsPromises = pokemonStats.map(async (stat) => {
        const statData = await queryClient.ensureQueryData(
          statQueryOptions(stat.stat.name),
        );

        return {
          ...statData,
          baseStat: stat.base_stat,
          effort: stat.effort,
        };
      });

      const response = await Promise.all(statsPromises);

      return response;
    },
  });

  return useMemo(() => ({ data }), [data]);
};
