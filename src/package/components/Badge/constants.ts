export const BadgeVariant = {
  PRIMARY: "primary",
  RED: "red",
  GRAY: "gray",
  GREEN: "green",
} as const;

export type BadgeVariantType = (typeof BadgeVariant)[keyof typeof BadgeVariant];
