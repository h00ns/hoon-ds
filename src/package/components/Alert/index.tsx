import styled from "@emotion/styled";
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import Icon from "../Icon";
import { AlertVariant, AlertVariantType } from "./types";
import { Radius } from "../../styles/Radius";
import { blue, primary, red } from "../../styles/Color";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly variant?: AlertVariantType;
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
    <Component style={{ ...styleProps[variant] }} ref={ref} {...htmlAttributes}>
      <Icon name="warning-triangle" stroke="transparent" fill={iconColor} />
      {children}
    </Component>
  );
};

const Component = styled.div`
  padding: 12px;
  box-sizing: border-box;
  border-radius: ${Radius.MEDIUM};

  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const styleProps = {
  [AlertVariant.PRIMARY]: {
    backgroundColor: blue.blue1,
  },
  [AlertVariant.ERROR]: {
    backgroundColor: red.red1,
  },
};

/**
 *  @Component Alert
 *  @props variant - Alert 스타일 {AlertVariantType}
 *  @props children - Alert Component Children {React.ReactNode}
 */
export default forwardRef(Alert);
