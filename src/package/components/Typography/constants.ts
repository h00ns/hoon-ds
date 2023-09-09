/**
 *  @Constants TypoVariant
 *  @value h - Headings
 *  @value sh - Sub Heading
 *  @value b - Body
 */
export const TypoVariant = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  SH1: "sh1",
  SH2: "sh2",
  SH3: "sh3",
  SH4: "sh4",
  SH5: "sh5",
  B1: "b1",
  B2: "b2",
  B3: "b3",
  B4: "b4",
  B5: "b5",
  B6: "b6",
} as const;

export type TypoVariantType = (typeof TypoVariant)[keyof typeof TypoVariant];
