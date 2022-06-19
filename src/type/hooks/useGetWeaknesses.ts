import { PokemonType } from "../../pokemon/typings";
import { useFetchType } from "./useFetchType";
import uniqBy from "lodash.uniqby";
import sortBy from "lodash.sortby";

type WeaknessesAndStrength = {
  doubleDamageFrom: Array<PokemonType["type"]>;
  noDamageFrom: Array<PokemonType["type"]>;
  halfDamageFrom: Array<PokemonType["type"]>;
};

export const useGetWeaknessess = (pokemonTypes: Array<PokemonType>) => {
  const { data: firstType } = useFetchType(pokemonTypes[0].type.name);
  const { data: secondType } = useFetchType(pokemonTypes[1]?.type.name);

  if (!firstType) {
    return { data: [], isSuccess: false };
  }

  const types = secondType ? [firstType, secondType] : [firstType];

  const { doubleDamageFrom, noDamageFrom, halfDamageFrom } = types.reduce<WeaknessesAndStrength>(
    (acc, type) => {
      return {
        doubleDamageFrom: [...acc.doubleDamageFrom, ...type.damage_relations.double_damage_from],
        noDamageFrom: [...acc.noDamageFrom, ...type.damage_relations.no_damage_from],
        halfDamageFrom: [...acc.halfDamageFrom, ...type.damage_relations.half_damage_from],
      };
    },
    { doubleDamageFrom: [], noDamageFrom: [], halfDamageFrom: [] }
  );

  const computedWeaknesses = doubleDamageFrom.filter((weakness) => {
    const isInUseless = noDamageFrom.some((type) => type.name === weakness.name);
    const isHalf = halfDamageFrom.some((type) => type.name === weakness.name);

    return !isInUseless && !isHalf;
  });

  const weaknessesWithoutDupe = uniqBy(computedWeaknesses, "name");
  const sortedWeaknesses = sortBy(weaknessesWithoutDupe, "name");

  return { data: sortedWeaknesses, isSuccess: true };
};
