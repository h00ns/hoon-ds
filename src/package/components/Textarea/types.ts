/**
 *  @Constants TextareaVariant
 *  @value DEFAULT - 기본
 *  @value ERROR - 에러상황
 *  @value FIXED - 고정상황
 */
export const TextareaVariant = {
  DEFAULT: "default",
  ERROR: "error",
  FIXED: "fixed",
} as const;

export type TextareaVariantType =
  (typeof TextareaVariant)[keyof typeof TextareaVariant];
