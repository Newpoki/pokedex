import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { PokemonStat } from "./pokemon-types";
import { statQueryOptions } from "@/stat/stat-query-options";
import { useMemo } from "react";

const EV = { min: 0, max: 252 };
const IV = { min: 0, max: 31 };
const NATURE_MULTIPLIER = { min: 0.9, max: 1.1 };

const getLevelMaxPokemonMinStat = (
  name: string,
  baseStat: number,
  kind: "min" | "max",
) => {
  const level = 100;

  if (name === "hp") {
    const stat =
      ((2 * baseStat + IV[kind] + EV[kind] / 4) * level) / 100 + level + 10;

    return Math.floor(stat);
  }

  const stat =
    (((2 * baseStat + IV[kind] + EV[kind] / 4) * level) / 100 + 5) *
    NATURE_MULTIPLIER[kind];

  return Math.floor(stat);
};

const getBaseStatPercentRelativeToMinMaxDiff = (
  name: string,
  baseStat: number,
) => {
  // When computing min and max stat, for hp, we're adding the pokemon level and 10
  // We want the percent to be on the same basis for all stats
  // So if we're computing the percent for HP stat, we need to use any another stat name
  const formatedName = name === "hp" ? "speed" : name;

  const minStat = getLevelMaxPokemonMinStat(formatedName, baseStat, "min");

  const maxStat = getLevelMaxPokemonMinStat(formatedName, baseStat, "max");

  return 1 - ((baseStat - minStat) / (maxStat - minStat)) * 100;
};

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

        const minStat = getLevelMaxPokemonMinStat(
          stat.stat.name,
          stat.base_stat,
          "min",
        );

        const maxStat = getLevelMaxPokemonMinStat(
          stat.stat.name,
          stat.base_stat,
          "max",
        );

        return {
          ...statData,
          baseStat: stat.base_stat,
          effort: stat.effort,
          minStat,
          maxStat,
          minMaxDiffPercent: getBaseStatPercentRelativeToMinMaxDiff(
            stat.stat.name,
            stat.base_stat,
          ),
        };
      });

      const response = await Promise.all(statsPromises);

      return response;
    },
  });

  return useMemo(() => ({ data }), [data]);
};
