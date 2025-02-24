import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

const BaseContact = z.object({
  id: z.string().min(1),
  status: z
    .enum(["received", "inProgress", "resolved", "closed"])
    .default("received"),
  assigned_staff_id: z.string().optional(),
  created_at: z.string().min(1),
  updated_at: z.string().min(1),
  user_id: z.string().optional(),
  support_memo: z.string().optional(),
  response_note: z.string().optional(),
  notes: z.string().optional(),
});

const ProductContact = BaseContact.extend({
  type: z.literal("product"),
  product_name: z.string(),
  purchase_date: z.string(),
});

const TechnicalContact = BaseContact.extend({
  type: z.literal("technical"),
  environment_os: z.string(),
  environment_browser: z.string(),
  environment_version: z.string(),
  error_message: z.string(),
});

const GeneralContact = BaseContact.extend({
  type: z.literal("general"),
  subject: z.string(),
});

export const Contact = z
  .discriminatedUnion("type", [
    ProductContact,
    TechnicalContact,
    GeneralContact,
  ])
  .openapi("Contact");

export type ContactType = z.infer<typeof Contact>;
