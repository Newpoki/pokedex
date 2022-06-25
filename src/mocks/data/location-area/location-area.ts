import { mockedDefaultLocationArea } from "./default";
import { error500LocationAreaHandler } from "./error-500";

export const mockedLocationArea = {
  default: {
    data: mockedDefaultLocationArea.data,
    handler: mockedDefaultLocationArea.handler,
  },
  error500: {
    data: undefined,
    handler: error500LocationAreaHandler,
    errorContent: null,
  },
};
