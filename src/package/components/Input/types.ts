/**
 *  @Constants InputVariant
 *  @value DEFAULT - 기본
 *  @value ERROR - 에러상황
 *  @value FIXED - 고정상황
 */
export const InputVariant = {
  DEFAULT: "default",
  ERROR: "error",
  FIXED: "fixed",
} as const;

export type InputVariantType = (typeof InputVariant)[keyof typeof InputVariant];
