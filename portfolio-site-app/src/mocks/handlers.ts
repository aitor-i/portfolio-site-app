import { rest } from "msw";
import { projectsData } from "./../api/data";

export const handlers = [
  rest.post("/api", (req, res, ctx) => {
    res(ctx.status(200), ctx.json(projectsData));
  }),
];
