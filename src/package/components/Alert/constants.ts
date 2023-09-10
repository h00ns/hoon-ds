/**
 *  @Constants AlertVariant
 *  @value PRIMARY - Blue Info
 *  @value ERROR - Red Error
 */
export const AlertVariant = {
  PRIMARY: "primary",
  ERROR: "error",
} as const;

export type AlertVariantType = (typeof AlertVariant)[keyof typeof AlertVariant];
