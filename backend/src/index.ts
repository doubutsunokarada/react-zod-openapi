import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { contactFormSchema } from "@packages/schema/parameters/contact/post";
import { zValidator } from "@hono/zod-validator";
import { ContactType } from "@packages/schema/models/contact";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/contact", (c) => {
  return c.json<ContactType>({
    id: "1",
  });
});

app.post("/contact", zValidator("json", contactFormSchema), (c) => {
  const params = c.req.valid("json");
  // do something
  return c.json({ status: 201, message: "created" });
});

export const handler = handle(app);
