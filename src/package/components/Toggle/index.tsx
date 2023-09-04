import styled from "@emotion/styled";

//  style
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { gray, primary, white } from "../../styles/Color";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly checkStatus: boolean;
}

/**
 *  @Component - Toggle
 *  @props checkStatus - 토글 상태 {boolean}
 */
const Toggle = (
  { checkStatus, ...htmlAttributes }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <Component checkStatus={checkStatus} ref={ref} {...htmlAttributes}>
      <Circle />
    </Component>
  );
};

const Component = styled.div<{ checkStatus: boolean }>`
  width: 44px;
  height: 24px;
  padding: 2px;
  cursor: pointer;

  border-radius: 50px;
  background: ${({ checkStatus }) => (checkStatus ? primary.blue : gray.gray1)};

  display: flex;
  justify-content: ${({ checkStatus }) =>
    checkStatus ? "flex-end" : "flex-start"};
`;

const Circle = styled.div`
  width: 20px;
  background: ${white};
  border-radius: 100%;
`;

export default forwardRef(Toggle);
