import { rest } from "msw";

import { mockedMSW500ErrorHandler } from "../../errors/500";

export const error500MoveHandler = () => {
  return rest.get("https://pokeapi.co/api/v2/move/pound", mockedMSW500ErrorHandler);
};
