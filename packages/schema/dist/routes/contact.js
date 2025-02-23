"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const contact_1 = require("../models/contact");
const generator_1 = require("../generator");
const post_1 = require("../parameters/contact/post");
const pagination_1 = require("../parameters/pagination");
const contactRoutes = [
    {
        method: "get",
        path: "/contact",
        description: "お問い合わせ一覧を取得する",
        summary: "お問い合わせ一覧取得",
        security: [{ [generator_1.bearerAuth.name]: [] }],
        request: { query: pagination_1.pagination },
        responses: {
            200: {
                description: "お問い合わせ一覧",
                content: { "application/json": { schema: zod_1.z.array(contact_1.Contact) } },
            },
        },
    },
    {
        method: "post",
        path: "/contact",
        description: "お問い合わせを登録する",
        summary: "お問い合わせ登録",
        security: [{ [generator_1.bearerAuth.name]: [] }],
        request: {
            body: { content: { "application/json": { schema: post_1.contactFormSchema } } },
        },
        responses: { 204: { description: "登録成功" } },
    },
];
contactRoutes.forEach((route) => generator_1.registry.registerPath(route));
