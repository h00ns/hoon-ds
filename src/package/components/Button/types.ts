/**
 *  @Constants ButtonVariant
 *  @value PRIMARY - 파랑
 *  @value OUTLINE - 외곽선
 *  @value RED - 빨강
 *  @value GRAY - 회색
 *  @value GREEN - 초록
 */
export const ButtonVariant = {
  PRIMARY: "primary",
  OUTLINE: "outline",
  RED: "red",
  GRAY: "gray",
  GREEN: "green",
} as const;

export type ButtonVariantType =
  (typeof ButtonVariant)[keyof typeof ButtonVariant];
