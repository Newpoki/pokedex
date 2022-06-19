import { mockedDefaultPokemonSpecies } from "./default";
import { error500PokemonSpeciesHandler } from "./error-500";

export const mockedPokemonSpecies = {
  default: {
    data: mockedDefaultPokemonSpecies.data,
    handler: mockedDefaultPokemonSpecies.handler,
  },
  error500: {
    data: undefined,
    handler: error500PokemonSpeciesHandler,
    errorContent: null,
  },
};
