import { rest } from "msw";

import { mockedMSW500ErrorHandler } from "../../errors/500";
import { mockedDefaultLocationArea } from "./default";

export const error500LocationAreaHandler = () => {
  return rest.get(mockedDefaultLocationArea.url, mockedMSW500ErrorHandler);
};
