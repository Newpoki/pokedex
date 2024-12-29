import { GENERATION_RANGES } from "@/generations/generations-constants";
import { PokemonsListFilters } from "./pokemons-types";
import { HEIGHT_CATEGORY_RANGES } from "@/height/height-constants";
import { WEIGHT_CATEGORY_RANGES } from "@/weight/weight-constants";

export const POKEMONS_LIST_DEFAULT_FILTERS = {
  idsRange: [GENERATION_RANGES["1"][0], GENERATION_RANGES["8"][1]],
  sort: {
    direction: "ASC",
    property: "id",
  },
  types: [],
  search: "",
  heightRange: [
    HEIGHT_CATEGORY_RANGES.short[0],
    HEIGHT_CATEGORY_RANGES.tall[1],
  ],
  weightRange: [
    WEIGHT_CATEGORY_RANGES.light[0],
    WEIGHT_CATEGORY_RANGES.heavy[1],
  ],
} as const satisfies PokemonsListFilters;
