import { PokemonType } from "../pokemon-types";

/**
 * Sort Pokemon's types per slot order. It should already be sorted
 * But the slot property is here to ensure everything is ok
 */
export const getPokemonFirstTypeName = (types: PokemonType[]) => {
  const sortedTypes = [...types].sort((a, b) => a.slot - b.slot);

  const firstPokemonTypeName = sortedTypes[0]?.type.name;

  if (firstPokemonTypeName == null) {
    throw new Error("Pokemon has no known type");
  }

  return firstPokemonTypeName;
};
