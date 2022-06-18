import { mockedDefaultType } from "./default";
import { error500TypeHandler } from "./error500";

export const mockedType = {
  default: {
    data: mockedDefaultType.data,
    handler: mockedDefaultType.handler,
  },
  error500: {
    data: undefined,
    handler: error500TypeHandler,
    errorContent: null,
  },
};
