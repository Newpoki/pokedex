import { Pokemon } from "../typings";

export const useGetPokemonYieldEVs = (pokemon: Pokemon) => {
  return pokemon.stats.filter((stat) => stat.effort > 0);
};
