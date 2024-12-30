import { pokemonQueryOptions } from "@/pokemon/pokemon-query-options";
import { createFileRoute } from "@tanstack/react-router";

const RouteComponent = () => {
  return (
    <div>
      <p>about</p>
    </div>
  );
};

export const Route = createFileRoute("/pokemon/$name/")({
  loader: (options) =>
    options.context.queryClient.ensureQueryData(
      pokemonQueryOptions(options.params.name),
    ),
  component: RouteComponent,
});
