import { mockedPokemon } from "./data/pokemon/pokemon";
import { mockedFlyingType } from "./data/type/flying.ts";
import { mockedType } from "./data/type/type";
import { mockedWaterType } from "./data/type/water";

export const handlers = [
  mockedPokemon.default.handler(),
  mockedType.default.handler(),
  mockedFlyingType.handler(),
  mockedWaterType.handler(),
];
