import { mockedDefaultRegion } from "./default";
import { error500RegionHandler } from "./error-500";

export const mockedRegion = {
  default: {
    data: mockedDefaultRegion.data,
    handler: mockedDefaultRegion.handler,
  },
  error500: {
    data: undefined,
    handler: error500RegionHandler,
    errorContent: null,
  },
};
