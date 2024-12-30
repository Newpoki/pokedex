import { queryOptions } from "@tanstack/react-query";
import { Type, TypeName } from "./type-types";
import { fetchPokemonAPI } from "@/api/api";

export const typeQueryOptions = (name: TypeName) =>
  queryOptions({
    queryKey: ["type", name],
    queryFn: async () => {
      const response = await fetchPokemonAPI<Type>(`/type/${name}`);

      return response;
    },
  });
