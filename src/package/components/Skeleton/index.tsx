import { ForwardedRef, forwardRef } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Radius } from "../../styles/Radius";
import { gray } from "../../styles/Color";

type Props = {
  readonly width?: string;
  readonly height?: string;
};

const Skeleton = (
  { width = "100%", height = "100%" }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return <Component style={{ width, height }} ref={ref} />;
};

const skeletonGradient = keyframes`
  0% {
      background-color: ${gray.gray1};
    }
    50% {
      background-color: ${gray.gray3}
    }
    100% {
      background-color: ${gray.gray1};
  }
`;

const Component = styled.div`
  flex: 1;
  border-radius: ${Radius.LARGE};

  animation: ${skeletonGradient} 2s infinite ease-in-out;
`;

/**
 *  @Component Skeleton
 *  @props width - 스켈레톤의 너비 {string}
 *  @props height - 스켈레톤의 높이 {string}
 */
export default forwardRef(Skeleton);
