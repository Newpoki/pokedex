import { rest } from "msw";

import { mockedMSW500ErrorHandler } from "../../errors/500";

export const error500PokemonsHandler = () => {
  return rest.get("https://pokeapi.co/api/v2/pokemon", mockedMSW500ErrorHandler);
};
