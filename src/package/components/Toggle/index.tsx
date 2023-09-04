import styled from "@emotion/styled";

//  style
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { gray, primary, white } from "../../styles/Color";
import { Radius } from "../../styles/Radius";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly checkStatus: boolean;
}

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
  box-sizing: border-box;
  width: 44px;
  height: 24px;
  padding: 2px;
  cursor: pointer;

  border-radius: ${Radius.MAXIMUM};
  background: ${({ checkStatus }) => (checkStatus ? primary.blue : gray.gray1)};

  display: flex;
  justify-content: ${({ checkStatus }) =>
    checkStatus ? "flex-end" : "flex-start"};
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background: ${white};
  border-radius: ${Radius.MAXIMUM};
`;

/**
 *  @Component Toggle
 *  @props checkStatus - 토글 상태 {boolean}
 */
export default forwardRef(Toggle);
