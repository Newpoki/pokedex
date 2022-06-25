import { rest } from "msw";

import { mockedMSW500ErrorHandler } from "../../errors/500";

export const error500RegionHandler = () => {
  return rest.get("https://pokeapi.co/api/v2/region/unova", mockedMSW500ErrorHandler);
};
