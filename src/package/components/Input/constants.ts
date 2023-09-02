export const InputVariant = {
  DEFAULT: "default",
  ERROR: "error",
  FIXED: "fixed",
} as const;

export type InputVariantType = (typeof InputVariant)[keyof typeof InputVariant];
