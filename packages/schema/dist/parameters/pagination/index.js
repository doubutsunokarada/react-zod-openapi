"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagination = void 0;
const zod_1 = require("zod");
exports.pagination = zod_1.z.object({
    limit: zod_1.z.number().int().multipleOf(10).default(10),
    offset: zod_1.z.number().int().nonnegative().default(0),
    sort: zod_1.z.enum(["asc", "desc"]).default("asc"),
});
