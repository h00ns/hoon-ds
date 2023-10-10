import styled from "@emotion/styled";
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { white } from "../../styles/Color";
import { Radius } from "../../styles/Radius";
import { Shadow } from "../../styles/Shadow";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly children: React.ReactNode;
}

const Card = (
  { children, ...htmlAttributes }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return <Component {...htmlAttributes}>{children}</Component>;
};

const Component = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
  background: ${white};
  border-radius: ${Radius.MEDIUM};
  box-shadow: ${Shadow.MEDIUM};
`;

/**
 *  @Component Card
 *  @props children - Card Component Children {React.ReactNode}
 */
export default forwardRef(Card);
