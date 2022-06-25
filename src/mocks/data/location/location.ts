import { mockedDefaultLocation } from "./default";
import { error500LocationHandler } from "./error-500";

export const mockedLocation = {
  default: {
    data: mockedDefaultLocation.data,
    handler: mockedDefaultLocation.handler,
  },
  error500: {
    data: undefined,
    handler: error500LocationHandler,
    errorContent: null,
  },
};
