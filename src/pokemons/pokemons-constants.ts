import { GENERATION_RANGES } from "@/generations/generations-constants";
import { PokemonsListFilters } from "./pokemons-types";

export const POKEMONS_LIST_DEFAULT_FILTERS = {
  idsRange: [GENERATION_RANGES["1"][0], GENERATION_RANGES["8"][1]],
} as const satisfies PokemonsListFilters;
