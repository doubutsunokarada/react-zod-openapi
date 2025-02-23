import { z } from "zod";

const CONTACT_TYPE_NAMES = ["product", "technical", "general"] as const;

export type ContactTypeValues = (typeof CONTACT_TYPE_NAMES)[number];
export type ContactTypeKeys = Capitalize<ContactTypeValues>;

export const CONTACT_TYPE = {
  Product: { value: "product", label: "製品" },
  Technical: { value: "technical", label: "技術" },
  General: { value: "general", label: "その他全般" },
} as const satisfies Record<
  ContactTypeKeys,
  { value: ContactTypeValues; label: string }
>;

// NOTE: IDだった場合の実装例

// const CONTACT_TYPE_VALUES = [1, 2, 3] as const;
// type ContactTypeValuesType = (typeof CONTACT_TYPE_VALUES)[number];

// export const CONTACT_TYPE = {
//   Product: { value: 1, label: "製品" },
//   Technical: { value: 2, label: "技術" },
//   General: { value: 3, label: "その他全般" },
// } as const satisfies Record<
//   ContactTypeKeys,
//   { value: ContactTypeValuesType; label: string }
// >;

export const contactTypeSchema = z.enum(CONTACT_TYPE_NAMES);
