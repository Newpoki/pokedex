import { HeightCategory } from "./height-types";

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
