import { z } from "zod";
export declare const pagination: z.ZodObject<{
    limit: z.ZodDefault<z.ZodNumber>;
    offset: z.ZodDefault<z.ZodNumber>;
    sort: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
    sort: "asc" | "desc";
    limit: number;
    offset: number;
}, {
    sort?: "asc" | "desc" | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
}>;
