import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export const Contact = z
  .object({
    id: z.string().min(1),
    type: z.enum(["product", "technical", "general"]),
    status: z
      .enum(["received", "inProgress", "resolved", "closed"])
      .default("received"),
    assigned_staff_id: z.string().optional(),
    created_at: z.string().min(1),
    updated_at: z.string().min(1),
    user_id: z.string().optional(),

    product_name: z.string().optional(),
    purchase_date: z.string().optional(),
    recommended_actions: z.string().optional(),
    environment_os: z.string().optional(),
    environment_browser: z.string().optional(),
    environment_version: z.string().optional(),
    error_message: z.string().optional(),
    support_memo: z.string().optional(),

    subject: z.string().optional(),
    response_note: z.string().optional(),

    notes: z.string().optional(),
  })
  .openapi("Contact");

export type ContactType = z.infer<typeof Contact>;
