import { PokemonType } from "../../pokemon/typings";
import { useFetchType } from "./useFetchType";
import uniqBy from "lodash.uniqby";

export const useGetWeaknessess = (pokemonTypes: Array<PokemonType>) => {
  const { data: firstType } = useFetchType(pokemonTypes[0].type.name);
  const { data: secondType } = useFetchType(pokemonTypes[1]?.type.name);

  if (!firstType) return [];

  const types = secondType ? [firstType, secondType] : [firstType];

  const weaknesses = types.reduce<Array<PokemonType["type"]>>((acc, type) => {
    return [...acc, ...type?.damage_relations?.double_damage_from];
  }, []);

  return uniqBy(weaknesses, "name");
};
