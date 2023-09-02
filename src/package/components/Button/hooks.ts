import { useMemo } from "react";
import { ButtonVariant, ButtonVariantType } from "./constants";
import { blue, gray, green, primary, red, white } from "../../styles/Color";

export const useGetButtonProps = (
  variant: ButtonVariantType,
  disabled: boolean
) => {
  const [backgroundColor, color, borderColor, hoverColor] = useMemo(() => {
    if (disabled) {
      return [gray.gray3, gray.gray5, gray.gray3, gray.gray1];
    }

    switch (variant) {
      case ButtonVariant.PRIMARY:
        return [primary.blue, white, primary.blue, blue.blue2];
      case ButtonVariant.OUTLINE:
        return [white, gray.gray6, gray.gray6, gray.gray2];
      case ButtonVariant.RED:
        return [red.red3, white, red.red3, red.red2];
      case ButtonVariant.GRAY:
        return [gray.gray6, white, gray.gray6, gray.gray5];
      case ButtonVariant.GREEN:
        return [green.green3, white, green.green3, green.green2];
    }
  }, [variant, disabled]);

  return [backgroundColor, color, borderColor, hoverColor];
};
