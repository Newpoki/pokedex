import { rest } from "msw";

import { mockedMSW500ErrorHandler } from "../../errors/500";

export const error500EggGroupHandler = () => {
  return rest.get("https://pokeapi.co/api/v2/egg-group/monster/", mockedMSW500ErrorHandler);
};
