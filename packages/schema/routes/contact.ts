import { z } from "zod";
import { Contact } from "../models/contact";
import { bearerAuth, registry } from "../generator";
import { RouteConfig } from "@asteasolutions/zod-to-openapi";
import { contactFormSchema } from "../parameters/contact/post";
import { pagination } from "../parameters/pagination";

const contactRoutes: RouteConfig[] = [
  {
    method: "get",
    path: "/contact",
    description: "お問い合わせ一覧を取得する",
    summary: "お問い合わせ一覧取得",
    security: [{ [bearerAuth.name]: [] }],
    request: { query: pagination },
    responses: {
      200: {
        description: "お問い合わせ一覧",
        content: { "application/json": { schema: z.array(Contact) } },
      },
    },
  },
  {
    method: "post",
    path: "/contact",
    description: "お問い合わせを登録する",
    summary: "お問い合わせ登録",
    security: [{ [bearerAuth.name]: [] }],
    request: {
      body: { content: { "application/json": { schema: contactFormSchema } } },
    },
    responses: { 201: { description: "登録成功" } },
  },
];

contactRoutes.forEach((route) => registry.registerPath(route));
