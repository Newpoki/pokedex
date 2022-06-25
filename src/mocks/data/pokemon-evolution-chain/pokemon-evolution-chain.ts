import { mockedDefaultPokemonEvolutionChain } from "./default";
import { error500PokemonEvolutionChainHandler } from "./error-500";

export const mockedPokemonEvolutionChain = {
  default: {
    data: mockedDefaultPokemonEvolutionChain.data,
    handler: mockedDefaultPokemonEvolutionChain.handler,
    url: mockedDefaultPokemonEvolutionChain.url,
  },
  error500: {
    data: undefined,
    handler: error500PokemonEvolutionChainHandler,
    errorContent: null,
  },
};
