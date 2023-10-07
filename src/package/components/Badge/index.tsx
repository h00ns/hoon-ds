import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { BadgeVariantType } from "./types";
import { badge } from "./index.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly variant: BadgeVariantType;
  readonly text: string;
}

const Badge = (
  { variant, text, ...htmlAttributes }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div className={badge({ variant })} ref={ref} {...htmlAttributes}>
      {text}
    </div>
  );
};

/**
 *  @Component Badge
 *  @props variant - 뱃지 스타일 {BadgeVariantType}
 *  @props text - 뱃지 텍스트 {string}
 */
export default forwardRef(Badge);
