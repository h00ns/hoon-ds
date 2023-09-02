import { useMemo } from "react";
import { gray, green, primary, red } from "../../styles/Color";
import { BadgeVariant, BadgeVariantType } from "./constants";

export const useGetBadgeProps = (variant: BadgeVariantType) => {
  const [backgroundColor] = useMemo(() => {
    switch (variant) {
      case BadgeVariant.PRIMARY:
        return [primary.blue];
      case BadgeVariant.RED:
        return [red.red3];
      case BadgeVariant.GRAY:
        return [gray.gray6];
      case BadgeVariant.GREEN:
        return [green.green3];
    }
  }, [variant]);

  return [backgroundColor];
};
