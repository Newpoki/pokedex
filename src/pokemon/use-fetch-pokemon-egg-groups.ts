import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { NamedAPIRessource } from "@/api/api-types";
import { eggGroupQueryOptions } from "@/egg-group/egg-group-query-options";

export const useFetchPokemonEggGroups = (
  pokemonName: string,
  pokemonEggGroups: NamedAPIRessource[],
) => {
  const queryClient = useQueryClient();

  const { data } = useSuspenseQuery({
    queryKey: ["pokemon", "egg-groups", pokemonName],
    queryFn: async () => {
      // Fetching for each pokemon egg-group, the whole data

      const eggGroupsPromises = pokemonEggGroups.map((eggGroup) =>
        queryClient.ensureQueryData(eggGroupQueryOptions(eggGroup.name)),
      );

      const response = await Promise.all(eggGroupsPromises);

      return response;
    },
  });

  return useMemo(() => ({ data }), [data]);
};
