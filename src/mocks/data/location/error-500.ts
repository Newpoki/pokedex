import { rest } from "msw";

import { mockedMSW500ErrorHandler } from "../../errors/500";

export const error500LocationHandler = () => {
  return rest.get("https://pokeapi.co/api/v2/location/canalave-city", mockedMSW500ErrorHandler);
};
