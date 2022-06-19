import { rest } from "msw";

import { mockedMSW500ErrorHandler } from "../../errors/500";

export const error500GrowthRateHandler = () => {
  return rest.get("https://pokeapi.co/api/v2/growth-rate/4/", mockedMSW500ErrorHandler);
};
