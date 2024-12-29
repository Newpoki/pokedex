import { WeightCategory } from "./weight-types";

/**
 * Contains the weight ranges in hectograms (API works with hectograms to avoid decimals)
 * Obtained from this page https://pokemon.fandom.com/wiki/Category:Pok%C3%A9mon_by_weight
 */
export const WEIGHT_CATEGORY_RANGES = {
  light: [0, 449],
  normal: [450, 2299],
  heavy: [2300, Infinity],
} as const satisfies Record<WeightCategory, [number, number]>;

export const WEIGHT_CATEGORY_NAMES = [
  "light",
  "normal",
  "heavy",
] as const satisfies WeightCategory[];
