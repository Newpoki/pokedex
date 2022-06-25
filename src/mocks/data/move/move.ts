import { mockedDefaultMove } from "./default";
import { error500MoveHandler } from "./error-500";

export const mockedMove = {
  default: {
    data: mockedDefaultMove.data,
    handler: mockedDefaultMove.handler,
  },
  error500: {
    data: undefined,
    handler: error500MoveHandler,
    errorContent: null,
  },
};
