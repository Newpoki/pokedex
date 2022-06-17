import { PokemonTypeName } from "../pokemon/typings";

export const typeQueryKeys = {
  base: ["type"],
  type: (typeName: PokemonTypeName | undefined) => [...typeQueryKeys.base, typeName],
};
