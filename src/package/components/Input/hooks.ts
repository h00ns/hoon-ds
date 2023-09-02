import { useMemo } from "react";
import { InputVariant, InputVariantType } from "./constants";
import { gray, red, white } from "../../styles/Color";

export const useGetInputProps = (variant: InputVariantType) => {
  const [backgroundColor, borderColor] = useMemo(() => {
    switch (variant) {
      case InputVariant.DEFAULT:
        return [white, gray.gray3];
      case InputVariant.ERROR:
        return [red.red1, "transparent"];
      case InputVariant.FIXED:
        return [gray.gray1, "transparent"];
    }
  }, [variant]);

  return [backgroundColor, borderColor];
};
