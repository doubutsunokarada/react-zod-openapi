import { z } from "zod";
export declare const Contact: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEnum<["product", "technical", "general"]>;
    status: z.ZodDefault<z.ZodEnum<["received", "inProgress", "resolved", "closed"]>>;
    assigned_staff_id: z.ZodOptional<z.ZodString>;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    user_id: z.ZodOptional<z.ZodString>;
    product_name: z.ZodOptional<z.ZodString>;
    purchase_date: z.ZodOptional<z.ZodString>;
    recommended_actions: z.ZodOptional<z.ZodString>;
    environment_os: z.ZodOptional<z.ZodString>;
    environment_browser: z.ZodOptional<z.ZodString>;
    environment_version: z.ZodOptional<z.ZodString>;
    error_message: z.ZodOptional<z.ZodString>;
    support_memo: z.ZodOptional<z.ZodString>;
    subject: z.ZodOptional<z.ZodString>;
    response_note: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "product" | "technical" | "general";
    status: "received" | "inProgress" | "resolved" | "closed";
    created_at: string;
    updated_at: string;
    assigned_staff_id?: string | undefined;
    user_id?: string | undefined;
    product_name?: string | undefined;
    purchase_date?: string | undefined;
    recommended_actions?: string | undefined;
    environment_os?: string | undefined;
    environment_browser?: string | undefined;
    environment_version?: string | undefined;
    error_message?: string | undefined;
    support_memo?: string | undefined;
    subject?: string | undefined;
    response_note?: string | undefined;
    notes?: string | undefined;
}, {
    id: string;
    type: "product" | "technical" | "general";
    created_at: string;
    updated_at: string;
    status?: "received" | "inProgress" | "resolved" | "closed" | undefined;
    assigned_staff_id?: string | undefined;
    user_id?: string | undefined;
    product_name?: string | undefined;
    purchase_date?: string | undefined;
    recommended_actions?: string | undefined;
    environment_os?: string | undefined;
    environment_browser?: string | undefined;
    environment_version?: string | undefined;
    error_message?: string | undefined;
    support_memo?: string | undefined;
    subject?: string | undefined;
    response_note?: string | undefined;
    notes?: string | undefined;
}>;
export type ContactType = z.infer<typeof Contact>;
