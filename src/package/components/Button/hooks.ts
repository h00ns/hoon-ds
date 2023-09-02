import { useMemo } from "react";
import { ButtonVariantType } from "./constants";
import { gray, primary } from "../../styles/Color";

export const useGetButtonProps = (
  variant: ButtonVariantType,
  disabled: boolean
) => {
  const [backgroundColor, color, borderColor, hoverColor] = useMemo(() => {
    if (disabled) {
      return [gray.gray2, gray.gray5, gray.gray3, gray.gray2];
    }
    return [gray.gray2, gray.gray5, gray.gray3, gray.gray2];
  }, [variant]);

  return [backgroundColor, color, borderColor, hoverColor];
};
