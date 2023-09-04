import { useMemo } from "react";
import { InputVariant, InputVariantType } from "./constants";
import { black, gray, primary, red, white } from "../../styles/Color";

export const useGetInputProps = (variant: InputVariantType) => {
  const [backgroundColor, borderColor, color] = useMemo(() => {
    switch (variant) {
      case InputVariant.DEFAULT:
        return [white, gray.gray3, black];
      case InputVariant.ERROR:
        return [white, red.red3, red.red3];
      case InputVariant.FIXED:
        return [gray.gray1, "transparent", primary.gray];
    }
  }, [variant]);

  return [backgroundColor, borderColor, color];
};
