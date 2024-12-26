import { fetchPokemonAPI } from "@/api/api";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { Type } from "./type-types";

type UseFetchTypeParams = {
  name: string;
};

export const useFetchType = ({ name }: UseFetchTypeParams) => {
  const { data } = useSuspenseQuery({
    queryKey: ["type", name],
    queryFn: async () => {
      const response = await fetchPokemonAPI<Type>(`/type/${name}`);

      return response;
    },
  });

  return useMemo(() => ({ type: data }), [data]);
};
