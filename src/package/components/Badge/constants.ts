/**
 *  @Constants BadgeVariant
 *  @value PRIMARY - 파랑
 *  @value RED - 빨강
 *  @value GRAY - 회색
 *  @value GREEN - 초록
 */
export const BadgeVariant = {
  PRIMARY: "primary",
  RED: "red",
  GRAY: "gray",
  GREEN: "green",
} as const;

export type BadgeVariantType = (typeof BadgeVariant)[keyof typeof BadgeVariant];
