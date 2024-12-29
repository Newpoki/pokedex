import { HeightCategory } from "./height-types";

/**
 * Contains the height ranges in decimeters (API works with decimeters to avoid decimals)
 * Obtained from this page https://pokemon.fandom.com/wiki/Category:Pok%C3%A9mon_by_height
 */
export const HEIGHT_CATEGORY_RANGES = {
  short: [0, 12],
  medium: [13, 21],
  tall: [22, Infinity],
} as const satisfies Record<HeightCategory, [number, number]>;

export const HEIGHT_CATEGORY_NAMES = [
  "short",
  "medium",
  "tall",
] as const satisfies HeightCategory[];
