import { useQuery } from "react-query";
import { PokemonTypeName } from "../../pokemon/typings";
import { typeQueryKeys } from "../type-constants";
import { Type } from "../typings";

export const useFetchType = (typeName: PokemonTypeName | undefined) => {
  return useQuery<Type>(
    [...typeQueryKeys.type(typeName)],
    async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`);
      const data = await response.json();

      return data;
    },
    {
      enabled: Boolean(typeName),
    }
  );
};
