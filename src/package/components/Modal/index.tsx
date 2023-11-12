import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Typography from "../Typography";
import { TypoVariant } from "../Typography/types";
import { white } from "../../styles/Color";
import { Radius } from "../../styles/Radius";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly openModal: boolean;
  readonly width?: string;
  readonly title: string;
  readonly contents: React.ReactNode;
  readonly footer?: React.ReactNode;
}

const Modal = (
  {
    openModal,
    width = "320px",
    title,
    contents,
    footer,
    ...htmlAttributes
  }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <Background openModal={openModal}>
      <Component style={{ width }} ref={ref} {...htmlAttributes}>
        <Title>
          <Typography variant={TypoVariant.SH2}>{title}</Typography>
        </Title>
        <Content>{contents}</Content>
        {footer}
      </Component>
    </Background>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Background = styled.div<{ openModal: boolean }>`
  min-width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.7);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  display: none;
  animation: ${fadeIn} 0.15s ease-in-out;

  ${({ openModal }) =>
    openModal &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

const Component = styled.div`
  padding: 24px;
  background: ${white};
  border-radius: ${Radius.MEDIUM};
`;

const Title = styled.div`
  margin-bottom: 24px;
`;

const Content = styled.div`
  margin-bottom: 20px;
`;

/**
 *  @Component Modal
 *  @props openModal - 모달 오픈 여부 {boolean}
 *  @props title - 모달 타이틀 {string}
 *  @props contents - 모달 컨텐츠 {React.ReactNode}
 *  @props footer - 모달 푸터 {React.ReactNode}
 */
export default forwardRef(Modal);
