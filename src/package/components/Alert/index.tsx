import styled from "@emotion/styled";
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import Icon from "../Icon";
import { AlertVariant, AlertVariantType } from "./constants";
import { useGetAlertProps } from "./hooks";
import { Radius } from "../../styles/Radius";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly variant?: AlertVariantType;
  readonly children: React.ReactNode;
}

const Alert = (
  { variant = AlertVariant.PRIMARY, children, ...htmlAttributes }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const [backgroundColor, iconColor] = useGetAlertProps(variant);

  return (
    <Component style={{ backgroundColor }} ref={ref} {...htmlAttributes}>
      <Icon name="warning-triangle" stroke="transparent" fill={iconColor} />
      {children}
    </Component>
  );
};

const Component = styled.div`
  padding: 12px;
  border-radius: ${Radius.MEDIUM};

  display: flex;
  align-items: center;
  column-gap: 12px;
`;

/**
 *  @Component Alert
 *  @props variant - Alert 스타일 {AlertVariantType}
 *  @props children - Alert Component Children {React.ReactNode}
 */
export default forwardRef(Alert);
