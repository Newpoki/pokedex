import { fetchPokemonData } from "@/pokemon/utils/fetch-pokemon-data";
import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

const RouteComponent = () => {
  return (
    <div>
      <p>pokemon</p>
    </div>
  );
};

export const Route = createFileRoute("/pokemon/$name")({
  loader: (options) =>
    options.context.queryClient.ensureQueryData(
      // TODO: Mutualize this and use it within the useFetchPokemons
      queryOptions({
        queryKey: ["pokemon", options.params.name],
        queryFn: async () => {
          const response = await fetchPokemonData({
            name: options.params.name,
          });

          return response;
        },
      }),
    ),
  component: RouteComponent,
});
