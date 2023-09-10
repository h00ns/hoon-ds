import { useMemo } from "react";
import { TextareaVariant, TextareaVariantType } from "./constants";
import { black, gray, primary, red, white } from "../../styles/Color";

export const useGetTextareaProps = (variant: TextareaVariantType) => {
  const [backgroundColor, borderColor, color] = useMemo(() => {
    switch (variant) {
      case TextareaVariant.DEFAULT:
        return [white, gray.gray3, black];
      case TextareaVariant.ERROR:
        return [white, red.red3, red.red3];
      case TextareaVariant.FIXED:
        return [gray.gray1, "transparent", primary.gray];
    }
  }, [variant]);

  return [backgroundColor, borderColor, color];
};
