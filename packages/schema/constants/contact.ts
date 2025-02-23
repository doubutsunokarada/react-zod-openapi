import { z } from "zod";

const CONTACT_TYPE_NAMES = ["product", "technical", "general"] as const;

export const CONTACT_TYPE = {
  Product: { value: "product", label: "製品" },
  Technical: { value: "technical", label: "技術" },
  General: { value: "general", label: "その他全般" },
} as const satisfies Record<
  string,
  { value: ContactTypeValues; label: string }
>;

export type ContactTypeValues = (typeof CONTACT_TYPE_NAMES)[number];
export const contactTypeSchema = z.enum(CONTACT_TYPE_NAMES);
