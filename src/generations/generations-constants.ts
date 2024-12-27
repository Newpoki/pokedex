import { GenerationsNumber } from "./generations-types";

/**
 * As the PokeAPI doesn't provide any generation information about the pokemon
 * And sometimes provide many entries for the same pokemon (cf miraidon or pikachu)
 * We have to create our own ranges
 */
export const GENERATION_RANGES = {
  1: [1, 151],
  2: [152, 251],
  3: [252, 386],
  4: [387, 494],
  5: [495, 649],
  6: [650, 721],
  7: [722, 809],
  8: [810, 905],
} as const satisfies Record<GenerationsNumber, [number, number]>;