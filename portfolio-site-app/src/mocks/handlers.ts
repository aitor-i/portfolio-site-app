import { rest } from "msw";

export const handlers = [
  rest.post("/api", (req, res, ctx) => {
    res(ctx.status(200));
  }),
];
