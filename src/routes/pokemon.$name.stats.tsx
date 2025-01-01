import { PokemonDataCategoryTitle } from "@/pokemon/pokemon-data-category-title";
import { PokemonDataTitle } from "@/pokemon/pokemon-data-title";
import { PokemonDataValue } from "@/pokemon/pokemon-data-value";
import { pokemonQueryOptions } from "@/pokemon/pokemon-query-options";
import { useFetchPokemonStats } from "@/pokemon/use-fetch-pokemon-stats";
import { getPokemonFirstTypeName } from "@/pokemon/utils/get-pokemon-first-type";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { Fragment } from "react/jsx-runtime";

const RouteComponent = () => {
  const params = Route.useParams();

  const { data: pokemon } = useSuspenseQuery(pokemonQueryOptions(params.name));
  const { data: stats } = useFetchPokemonStats(pokemon.name, pokemon.stats);

  const firstTypeName = getPokemonFirstTypeName(pokemon.types);

  const baseStatsSum = useMemo(() => {
    return stats.reduce((acc, stat) => {
      return acc + stat.baseStat;
    }, 0);
  }, [stats]);

  return (
    <main className="flex flex-col gap-5">
      <PokemonDataCategoryTitle typeName={firstTypeName}>
        Base Stats
      </PokemonDataCategoryTitle>

      <div className="grid grid-cols-[max-content_max-content_auto_max-content_max-content] items-center gap-x-4 gap-y-3">
        {stats.map((stat) => {
          return (
            <Fragment key={stat.id}>
              <PokemonDataTitle>{stat.displayName}</PokemonDataTitle>
              <PokemonDataValue className="text-right">
                {stat.baseStat}
              </PokemonDataValue>
              <div>
                <div
                  className="animate-horizontal-collapse h-1 rounded-[2px]"
                  style={{
                    backgroundColor: `hsl(var(--color-${firstTypeName}))`,
                    // For some rare exception such as Blissey hp, percent can exceed 100
                    maxWidth: `${stat.minMaxDiffPercent > 100 ? 100 : stat.minMaxDiffPercent}%`,
                  }}
                />
              </div>
              <PokemonDataValue className="text-right">
                {stat.minStat}
              </PokemonDataValue>
              <PokemonDataValue className="text-right">
                {stat.maxStat}
              </PokemonDataValue>
            </Fragment>
          );
        })}

        <PokemonDataTitle>Total</PokemonDataTitle>
        <PokemonDataValue className="text-right font-bold">
          {baseStatsSum}
        </PokemonDataValue>
        <div />
        <PokemonDataTitle>Min</PokemonDataTitle>
        <PokemonDataTitle>Max</PokemonDataTitle>
      </div>

      <p className="text-xs font-medium text-grey">
        The ranges shown on the right are for a level 100 Pokémon. Maximum
        values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values
        are based on a hindering nature, 0 EVs, 0 IVs.
      </p>
    </main>
  );
};

export const Route = createFileRoute("/pokemon/$name/stats")({
  loader: (options) =>
    options.context.queryClient.ensureQueryData(
      pokemonQueryOptions(options.params.name),
    ),
  component: RouteComponent,
});
