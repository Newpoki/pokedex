// src/mocks/error/500.ts

import { RestContext, RestRequest, ResponseComposition } from "msw";

export const mockedMSW500ErrorHandler = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(ctx.status(500));
};
