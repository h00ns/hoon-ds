import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { primary } from "../../styles/Color";
import { Radius } from "../../styles/Radius";

/**
 *  @Component Indicator (Loading Indicator)
 */
export default function Indicator() {
  return <Component />;
}

const spin = keyframes`
    100%{ -webkit-transform: rotate(360deg); }
  `;

const Component = styled.div`
  margin: 0 auto;
  width: 16px;
  height: 16px;
  border: 2px solid #fff;
  margin: 0;
  display: block;
  border-radius: ${Radius.MAXIMUM};
  border-color: ${primary.gray} rgba(255, 255, 255, 0.2)
    rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.2);
  animation: ${spin} 1.15s cubic-bezier(0.31, 0.63, 0.8, 0.73) infinite;
`;
