import { z } from "zod";
export declare const contactFormSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<["product", "technical", "general"]>;
}, {
    productName: z.ZodString;
    purchaseDate: z.ZodString;
    details: z.ZodString;
    type: z.ZodLiteral<"product">;
}>, "strip", z.ZodTypeAny, {
    type: "product";
    name: string;
    email: string;
    productName: string;
    purchaseDate: string;
    details: string;
    phone?: string | undefined;
}, {
    type: "product";
    name: string;
    email: string;
    productName: string;
    purchaseDate: string;
    details: string;
    phone?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<["product", "technical", "general"]>;
}, {
    environment: z.ZodObject<{
        os: z.ZodString;
        browser: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        os: string;
        browser?: string | undefined;
        version?: string | undefined;
    }, {
        os: string;
        browser?: string | undefined;
        version?: string | undefined;
    }>;
    errorMessage: z.ZodOptional<z.ZodString>;
    details: z.ZodString;
    type: z.ZodLiteral<"technical">;
}>, "strip", z.ZodTypeAny, {
    type: "technical";
    name: string;
    email: string;
    details: string;
    environment: {
        os: string;
        browser?: string | undefined;
        version?: string | undefined;
    };
    phone?: string | undefined;
    errorMessage?: string | undefined;
}, {
    type: "technical";
    name: string;
    email: string;
    details: string;
    environment: {
        os: string;
        browser?: string | undefined;
        version?: string | undefined;
    };
    phone?: string | undefined;
    errorMessage?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<["product", "technical", "general"]>;
}, {
    subject: z.ZodString;
    details: z.ZodString;
    type: z.ZodLiteral<"general">;
}>, "strip", z.ZodTypeAny, {
    type: "general";
    name: string;
    subject: string;
    email: string;
    details: string;
    phone?: string | undefined;
}, {
    type: "general";
    name: string;
    subject: string;
    email: string;
    details: string;
    phone?: string | undefined;
}>]>;
