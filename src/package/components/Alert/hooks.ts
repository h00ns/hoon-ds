import { useMemo } from "react";
import { AlertVariant, AlertVariantType } from "./constants";
import { blue, primary, red } from "../../styles/Color";

export const useGetAlertProps = (variant: AlertVariantType) => {
  const [backgroundColor, iconColor] = useMemo(() => {
    switch (variant) {
      case AlertVariant.PRIMARY:
        return [blue.blue1, primary.blue];
      case AlertVariant.ERROR:
        return [red.red1, red.red3];
    }
  }, [variant]);

  return [backgroundColor, iconColor];
};
