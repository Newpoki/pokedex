import { WeightCategory } from "./weight-types";

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
