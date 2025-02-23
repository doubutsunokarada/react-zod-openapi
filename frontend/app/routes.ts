import { route, prefix, layout } from "@react-router/dev/routes";
import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  layout("./authenticated/layout.tsx", [
    ...prefix("contact", [
      index("./contact/home.tsx"),
      route("thanks", "./contact/thanks.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
