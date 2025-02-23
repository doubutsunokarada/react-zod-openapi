import { Title } from "@mantine/core";
import type { Route } from "./+types/thanks";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "お問い合わせ完了" },
    { name: "description", content: "お問い合わせ完了" },
  ];
}

export default function Thanks() {
  return (
    <>
      <Title mb={16} order={1}>
        お問い合わせ
      </Title>
      <p>お問い合わせありがとうございました</p>
    </>
  );
}
