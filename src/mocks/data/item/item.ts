import { mockedDefaultItem } from "./default";
import { error500ItemHandler } from "./error-500";

export const mockedItem = {
  default: {
    data: mockedDefaultItem.data,
    handler: mockedDefaultItem.handler,
  },
  error500: {
    data: undefined,
    handler: error500ItemHandler,
    errorContent: null,
  },
};
