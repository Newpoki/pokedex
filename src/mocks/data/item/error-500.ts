import { rest } from "msw";

import { mockedMSW500ErrorHandler } from "../../errors/500";

export const error500ItemHandler = () => {
  return rest.get("https://pokeapi.co/api/v2/item/pp-up/", mockedMSW500ErrorHandler);
};
