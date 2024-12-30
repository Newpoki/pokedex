import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import LeftArrowIcon from "@/assets/icons/left-arrow.svg";
import { pokemonQueryOptions } from "@/pokemon/pokemon-query-options";

const RouteComponent = () => {
  const params = Route.useParams();

  const { data: pokemon } = useSuspenseQuery(pokemonQueryOptions(params.name));

  return (
    <div>
      <header className="p-10">
        <LeftArrowIcon className="h-6 w-6 text-white" />
        {pokemon.displayName}
      </header>
      <p>pokemon</p>
    </div>
  );
};

export const Route = createFileRoute("/pokemon/$name")({
  loader: (options) =>
    options.context.queryClient.ensureQueryData(
      pokemonQueryOptions(options.params.name),
    ),
  component: RouteComponent,
});
