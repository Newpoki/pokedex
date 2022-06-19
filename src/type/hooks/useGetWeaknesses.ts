import { PokemonType } from "../../pokemon/typings";
import { useFetchType } from "./useFetchType";
import uniqBy from "lodash.uniqby";
import unionBy from "lodash.unionby";

type WeaknessesAndStrength = {
  weaknesses: Array<PokemonType["type"]>;
  useless: Array<PokemonType["type"]>;
  half: Array<PokemonType["type"]>;
};

export const useGetWeaknessess = (pokemonTypes: Array<PokemonType>) => {
  const { data: firstType } = useFetchType(pokemonTypes[0].type.name);
  const { data: secondType } = useFetchType(pokemonTypes[1]?.type.name);

  if (!firstType) {
    return { data: [], isSuccess: false };
  }

  const types = secondType ? [firstType, secondType] : [firstType];

  const { weaknesses, useless, half } = types.reduce<WeaknessesAndStrength>(
    (acc, type) => {
      return {
        weaknesses: [...acc.weaknesses, ...type.damage_relations.double_damage_from],
        useless: [...acc.useless, ...type.damage_relations.no_damage_from],
        half: [...acc.half, ...type.damage_relations.half_damage_from],
      };
    },
    { weaknesses: [], useless: [], half: [] }
  );

  const computedWeaknesses = weaknesses.filter((weakness) => {
    const isInUseless = useless.some((useless) => useless.name === weakness.name);
    const isSameType = pokemonTypes.some((pokemonType) => pokemonType.type.name === weakness.name);
    const isHalf = half.some((half) => half.name === weakness.name);

    return !isInUseless && !isSameType && !isHalf;
  });

  const data = uniqBy(computedWeaknesses, "name");

  return {
    data,
    isSuccess: true,
  };
};
