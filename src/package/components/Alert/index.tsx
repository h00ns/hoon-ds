import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import Icon from "../Icon";
import { AlertVariant, AlertVariantType } from "./types";
import { alert } from "./index.css";
import { primary, red } from "../../styles/Color";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly variant?: "primary" | "error";
  readonly children: React.ReactNode;
}

const Alert = (
  { variant = AlertVariant.PRIMARY, children, ...htmlAttributes }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const iconColor = {
    [AlertVariant.PRIMARY]: primary.blue,
    [AlertVariant.ERROR]: red.red3,
  }[variant];

  return (
    <div className={alert({ variant })} ref={ref} {...htmlAttributes}>
      <Icon name="warning-triangle" stroke="transparent" fill={iconColor} />
      {children}
    </div>
  );
};

/**
 *  @Component Alert
 *  @props variant - Alert 스타일 {AlertVariantType}
 *  @props children - Alert Component Children {React.ReactNode}
 */
export default forwardRef(Alert);
