"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const zod_1 = require("zod");
const zod_to_openapi_1 = require("@asteasolutions/zod-to-openapi");
(0, zod_to_openapi_1.extendZodWithOpenApi)(zod_1.z);
exports.Contact = zod_1.z
    .object({
    id: zod_1.z.string().min(1),
    type: zod_1.z.enum(["product", "technical", "general"]),
    status: zod_1.z
        .enum(["received", "inProgress", "resolved", "closed"])
        .default("received"),
    assigned_staff_id: zod_1.z.string().optional(),
    created_at: zod_1.z.string().min(1),
    updated_at: zod_1.z.string().min(1),
    user_id: zod_1.z.string().optional(),
    product_name: zod_1.z.string().optional(),
    purchase_date: zod_1.z.string().optional(),
    recommended_actions: zod_1.z.string().optional(),
    environment_os: zod_1.z.string().optional(),
    environment_browser: zod_1.z.string().optional(),
    environment_version: zod_1.z.string().optional(),
    error_message: zod_1.z.string().optional(),
    support_memo: zod_1.z.string().optional(),
    subject: zod_1.z.string().optional(),
    response_note: zod_1.z.string().optional(),
    notes: zod_1.z.string().optional(),
})
    .openapi("Contact");
