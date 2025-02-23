import { z } from "zod";

export const pagination = z.object({
  limit: z.number().int().multipleOf(10).default(10),
  offset: z.number().int().nonnegative().default(0),
  sort: z.enum(["asc", "desc"]).default("asc"),
});
