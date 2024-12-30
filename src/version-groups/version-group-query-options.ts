import { fetchPokemonAPI } from "@/api/api";
import { queryOptions } from "@tanstack/react-query";
import { VersionGroup } from "./version-group-types";

export const versionGroupQueryOptions = (name: string) =>
  queryOptions({
    queryKey: ["version-group", name],
    queryFn: async () => {
      const versionGroup = await fetchPokemonAPI<VersionGroup>(
        `/version-group/${name}`,
      );

      return versionGroup;
    },
  });
