import { pokemonQueryOptions } from "@/pokemon/pokemon-query-options";
import { createFileRoute } from "@tanstack/react-router";

const RouteComponent = () => {
  return (
    <div>
      <p>stats</p>
    </div>
  );
};

export const Route = createFileRoute("/pokemon/$name/stats")({
  loader: (options) =>
    options.context.queryClient.ensureQueryData(
      pokemonQueryOptions(options.params.name),
    ),
  component: RouteComponent,
});
