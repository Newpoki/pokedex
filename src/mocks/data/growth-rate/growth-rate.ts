import { mockedDefaultGrowthRate } from "./default";
import { error500GrowthRateHandler } from "./error-500";

export const mockedGrowthRate = {
  default: {
    data: mockedDefaultGrowthRate.data,
    handler: mockedDefaultGrowthRate.handler,
  },
  error500: {
    data: undefined,
    handler: error500GrowthRateHandler,
    errorContent: null,
  },
};
