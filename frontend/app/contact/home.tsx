import { parseWithZod } from "@conform-to/zod";
import type { Route } from "./+types/home";
import { contactFormSchema } from "@packages/schema/parameters/contact/post";
import { Form, redirect, useActionData } from "react-router";
import {
  Button,
  Checkbox,
  Group,
  Radio,
  Stack,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { CONTACT_TYPE } from "@packages/schema/constants/contact";
import { useForm } from "@conform-to/react";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema: contactFormSchema });
  console.log("submission", submission.status);
  if (submission.status !== "success") {
    return submission.reply();
  }
  return redirect("/contact/thanks");
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "お問い合わせ" },
    { name: "description", content: "お問い合わせページです" },
  ];
}

export default function Contact() {
  const lastResult = useActionData<typeof action>();
  const [form, fields] = useForm({
    lastResult,
    onValidate: ({ formData }) => {
      return parseWithZod(formData, { schema: contactFormSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  console.log(fields.purchaseDate.value);

  const ProductForm = () => (
    <>
      <TextInput
        label="製品名"
        placeholder="製品名を入力してください"
        key={fields.productName.key}
        name={fields.productName.name}
        error={fields.productName.errors}
        withAsterisk
      />
      <DateInput
        label="購入日"
        key={fields.purchaseDate.key}
        name={fields.purchaseDate.name}
        error={fields.purchaseDate.errors}
        valueFormat="YYYY-MM-DD"
        withAsterisk
      />
    </>
  );

  const TechnicalSupport = () => {
    const { os, browser, version } = fields.environment.getFieldset();
    return (
      <>
        <TextInput
          label="使用OS"
          placeholder="使用OSを入力してください"
          key={os.key}
          name={os.name}
          error={os.errors}
          withAsterisk
        />
        <TextInput
          label="ブラウザ"
          placeholder="使用ブラウザを入力してください"
          key={browser.key}
          name={browser.name}
          error={browser.errors}
        />
        <TextInput
          label="バージョン"
          placeholder="バージョンを入力してください"
          key={version.key}
          name={version.name}
          error={version.errors}
        />
        <Textarea
          label="エラーメッセージ"
          placeholder="エラーメッセージを入力してください"
          key={fields.errorMessage.key}
          name={fields.errorMessage.name}
          error={fields.errorMessage.errors}
        />
      </>
    );
  };

  const GeneralInquiry = () => {
    return (
      <>
        <Textarea
          label="件名"
          placeholder="件名を入力してください"
          key={fields.subject.key}
          name={fields.subject.name}
          defaultValue={fields.subject.value}
          error={fields.subject.errors}
          withAsterisk
        />
      </>
    );
  };

  return (
    <>
      <Title mb={16} order={1}>
        お問い合わせ
      </Title>
      <Form method="post" id={form.id} onSubmit={form.onSubmit}>
        <Stack mb={20}>
          <TextInput
            withAsterisk
            label="お名前"
            placeholder="山田太郎"
            key={fields.name.key}
            name={fields.name.name}
            defaultValue={fields.name.value}
            error={fields.name.errors}
          />
          <TextInput
            withAsterisk
            label="Eメール"
            placeholder="your-email@example.com"
            key={fields.email.key}
            name={fields.email.name}
            defaultValue={fields.email.value}
            error={fields.email.errors}
          />
          <TextInput
            label="電話番号"
            placeholder="000-0000-0000"
            key={fields.phone.key}
            name={fields.phone.name}
            defaultValue={fields.phone.value}
            error={fields.phone.errors}
          />
        </Stack>
        <Textarea
          label="詳細"
          key={fields.details.key}
          name={fields.details.name}
          defaultValue={fields.details.value}
          error={fields.details.errors}
          withAsterisk
        />
        <Radio.Group
          label="お問い合わせ内容"
          withAsterisk
          error={fields.type.errors}
        >
          <Group mt="xs" mb={20}>
            {Object.values(CONTACT_TYPE).map((type) => (
              <Radio
                label={type.label}
                value={type.value}
                key={type.value}
                name={fields.type.name}
              />
            ))}
          </Group>
        </Radio.Group>
        {fields.type.value === "product" && <ProductForm />}
        {fields.type.value === "technical" && <TechnicalSupport />}
        {fields.type.value === "general" && <GeneralInquiry />}

        <Checkbox mt="md" label="I agree to sell my privacy" />

        <Group justify="flex-end" mt="md">
          <Button type="submit">送信</Button>
        </Group>
      </Form>
    </>
  );
}
