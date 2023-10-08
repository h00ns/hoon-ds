import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { TypoVariantType } from "./types";
import { black } from "../../styles/Color";
import { typography } from "./index.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly variant: TypoVariantType;
  readonly color?: string;
  readonly children: React.ReactNode;
}

const Typography = (
  { variant, color = black, children, ...htmlAttributes }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div className={typography({ variant })} ref={ref} {...htmlAttributes}>
      {children}
    </div>
  );
};

/**
 *  @Component Typography
 *  @props variant - 텍스트 스타일 {TypoVariant}
 *  @props color - 텍스트 색상 {string}
 *  @props children - 텍스트 {React.ReactNode}
 */
export default forwardRef(Typography);
