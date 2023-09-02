import { useMemo } from "react";
import { TypoVariant, TypoVariantType } from "./constants";

export const useGetTypographyProps = (variant: TypoVariantType) => {
  const [fontSize, fontWeight, lineHeight] = useMemo(() => {
    switch (variant) {
      case TypoVariant.H1:
        return ["90px", 800, "124px"];
      case TypoVariant.H2:
        return ["66px", 800, "90px"];
      case TypoVariant.H3:
        return ["52px", 700, "72px"];
      case TypoVariant.H4:
        return ["40px", 700, "60px"];
      case TypoVariant.H5:
        return ["32px", 700, "50px"];
      case TypoVariant.SH1:
        return ["24px", 700, "34px"];
      case TypoVariant.SH2:
        return ["20px", 700, "28px"];
      case TypoVariant.SH3:
        return ["16px", 700, "22px"];
      case TypoVariant.SH4:
        return ["14px", 700, "20px"];
      case TypoVariant.SH5:
        return ["12px", 700, "18px"];
      case TypoVariant.B1:
        return ["20px", 400, "28px"];
      case TypoVariant.B2:
        return ["18px", 400, "26px"];
      case TypoVariant.B3:
        return ["16px", 400, "24px"];
      case TypoVariant.B4:
        return ["14px", 400, "20px"];
      case TypoVariant.B5:
        return ["12px", 400, "18px"];
      case TypoVariant.B6:
        return ["10px", 400, "16px"];
    }
  }, [variant]);

  return [fontSize, fontWeight, lineHeight];
};
