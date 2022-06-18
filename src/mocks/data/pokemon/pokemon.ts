import { mockedDefaultPokemon } from "./default";
import { error500PokemonHandler } from "./error500";

export const mockedPokemon = {
  default: {
    data: mockedDefaultPokemon.data,
    handler: mockedDefaultPokemon.handler,
  },
  error500: {
    data: undefined,
    handler: error500PokemonHandler,
    errorContent: null,
  },
};
