export const ButtonVariant = {
  PRIMARY: "primary",
  OUTLINE: "outline",
  RED: "red",
  GRAY: "gray",
  GREEN: "green",
} as const;

export type ButtonVariantType =
  (typeof ButtonVariant)[keyof typeof ButtonVariant];
