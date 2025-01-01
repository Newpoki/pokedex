import { PokemonDataCategoryTitle } from "@/pokemon/pokemon-data-category-title";
import { PokemonEvolution } from "@/pokemon/pokemon-evolution";
import { pokemonQueryOptions } from "@/pokemon/pokemon-query-options";
import { getPokemonFirstTypeName } from "@/pokemon/utils/get-pokemon-first-type";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

const RouteComponent = () => {
  const params = Route.useParams();

  const { data: pokemon } = useSuspenseQuery(pokemonQueryOptions(params.name));

  const firstTypeName = getPokemonFirstTypeName(pokemon.types);

  return (
    <main className="flex flex-col gap-5">
      <PokemonDataCategoryTitle className="mb-7" typeName={firstTypeName}>
        Evolution Chart
      </PokemonDataCategoryTitle>

      <PokemonEvolution name={pokemon.name} />
    </main>
  );
};

export const Route = createFileRoute("/pokemon/$name/evolution")({
  loader: (options) =>
    options.context.queryClient.ensureQueryData(
      pokemonQueryOptions(options.params.name),
    ),
  component: RouteComponent,
});
