import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { TypoVariant } from "./types";

export const typography = recipe({
  base: {
    fontFamily: "Pretendard",
    wordBreak: "keep-all",
    whiteSpace: "pre-line",
    letterSpacing: "-2%",
  },

  variants: {
    variant: {
      [TypoVariant.H1]: {
        fontSize: 90,
        fontWeight: 800,
        lineHeight: 124,
      },
      [TypoVariant.H2]: {
        fontSize: 66,
        fontWeight: 800,
        lineHeight: 90,
      },
      [TypoVariant.H3]: {
        fontSize: 52,
        fontWeight: 700,
        lineHeight: 72,
      },
      [TypoVariant.H4]: {
        fontSize: 40,
        fontWeight: 700,
        lineHeight: 60,
      },
      [TypoVariant.H5]: {
        fontSize: 32,
        fontWeight: 700,
        lineHeight: 50,
      },
      [TypoVariant.SH1]: {
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 30,
      },
      [TypoVariant.SH2]: {
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 26,
      },
      [TypoVariant.SH3]: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 22,
      },
      [TypoVariant.SH4]: {
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 20,
      },
      [TypoVariant.SH5]: {
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 18,
      },
      [TypoVariant.B1]: {
        fontSize: 24,
        fontWeight: 400,
        lineHeight: 30,
      },
      [TypoVariant.B2]: {
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 26,
      },
      [TypoVariant.B3]: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 22,
      },
      [TypoVariant.B4]: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 20,
      },
      [TypoVariant.B5]: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 18,
      },
      [TypoVariant.B6]: {
        fontSize: 10,
        fontWeight: 400,
      },
    },
  },
});
