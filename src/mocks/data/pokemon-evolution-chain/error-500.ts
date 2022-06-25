import { rest } from "msw";

import { mockedMSW500ErrorHandler } from "../../errors/500";
import { mockedDefaultPokemonEvolutionChain } from "./default";

export const error500PokemonEvolutionChainHandler = () => {
  return rest.get(mockedDefaultPokemonEvolutionChain.url, mockedMSW500ErrorHandler);
};
