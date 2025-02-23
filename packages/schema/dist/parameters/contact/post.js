"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactFormSchema = void 0;
const zod_1 = require("zod");
const contactBaseSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "お名前を入力してください"),
    email: zod_1.z.string().email("正しいメールアドレスを入力してください"),
    phone: zod_1.z
        .string()
        .regex(/^[0-9-]{10,}$/, "正しい電話番号を入力してください")
        .optional(),
    type: zod_1.z.enum(["product", "technical", "general"]),
});
const productInquiryFields = {
    productName: zod_1.z.string().min(1, "製品名を入力してください"),
    purchaseDate: zod_1.z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, "購入日をYYYY-MM-DD形式で入力してください"),
    details: zod_1.z.string().min(10, "詳細を10文字以上で入力してください"),
};
const technicalSupportFields = {
    environment: zod_1.z.object({
        os: zod_1.z.string().min(1, "OSを入力してください"),
        browser: zod_1.z.string().min(1, "ブラウザを入力してください").optional(),
        version: zod_1.z.string().optional(),
    }),
    errorMessage: zod_1.z.string().optional(),
    details: zod_1.z.string().min(10, "詳細を10文字以上で入力してください"),
};
const generalInquiryFields = {
    subject: zod_1.z.string().min(1, "件名を入力してください"),
    details: zod_1.z.string().min(10, "詳細を10文字以上で入力してください"),
};
const productInquirySchema = contactBaseSchema.extend({
    type: zod_1.z.literal("product"),
    ...productInquiryFields,
});
const technicalSupportSchema = contactBaseSchema.extend({
    type: zod_1.z.literal("technical"),
    ...technicalSupportFields,
});
const generalInquirySchema = contactBaseSchema.extend({
    type: zod_1.z.literal("general"),
    ...generalInquiryFields,
});
exports.contactFormSchema = zod_1.z.discriminatedUnion("type", [
    productInquirySchema,
    technicalSupportSchema,
    generalInquirySchema,
]);
// バリデーション例：
// const result = contactFormSchema.safeParse({
//   name: "山田太郎",
//   email: "yamada@example.com",
//   type: "product",
//   productName: "素晴らしい製品",
//   purchaseDate: "2024-02-22",
//   details: "製品について質問があります。"
// });
