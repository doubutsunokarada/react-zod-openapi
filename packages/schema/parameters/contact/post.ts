import { z } from "zod";
import { contactTypeSchema } from "../../constants/contact";

const contactBaseSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  phone: z
    .string()
    .regex(/^[0-9-]{10,}$/, "正しい電話番号を入力してください")
    .optional(),
  type: contactTypeSchema,
  details: z.string().min(10, "詳細を10文字以上で入力してください"),
});

const productInquiryFields = {
  productName: z.string().min(1, "製品名を入力してください"),
  purchaseDate: z.string().datetime("購入日をYYYY-MM-DD形式で入力してください"),
};

const technicalSupportFields = {
  environment: z.object({
    os: z.string().min(1, "OSを入力してください"),
    browser: z.string().min(1, "ブラウザを入力してください").optional(),
    version: z.string().optional(),
  }),
  errorMessage: z.string().optional(),
};

const generalInquiryFields = {
  subject: z.string().min(1, "件名を入力してください"),
};

const productInquirySchema = contactBaseSchema.extend({
  type: z.literal("product"),
  ...productInquiryFields,
});

const technicalSupportSchema = contactBaseSchema.extend({
  type: z.literal("technical"),
  ...technicalSupportFields,
});

const generalInquirySchema = contactBaseSchema.extend({
  type: z.literal("general"),
  ...generalInquiryFields,
});

export const contactFormSchema = z.discriminatedUnion("type", [
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
