import { mockedPokemon } from "./data/pokemon/pokemon";
import { mockedType } from "./data/type/type";

export const handlers = [mockedPokemon.default.handler(), mockedType.default.handler()];
