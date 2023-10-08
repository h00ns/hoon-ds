/**
 *  @Constants TextFieldVariant
 *  @value DEFAULT - 기본
 *  @value ERROR - 에러상황
 *  @value FIXED - 고정상황
 */
export const TextFieldVariant = {
  DEFAULT: "default",
  ERROR: "error",
  FIXED: "fixed",
} as const;

export type TextFieldVariantType =
  (typeof TextFieldVariant)[keyof typeof TextFieldVariant];
