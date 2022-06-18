import { rest } from "msw";

import { mockedMSW500ErrorHandler } from "../../errors/500";

export const error500PokemonHandler = () => {
  return rest.get(`https://pokeapi.co/api/v2/pokemon/:pokemonIdOrName`, mockedMSW500ErrorHandler);
};
