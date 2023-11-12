import styled from "@emotion/styled";
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { TypoVariant, TypoVariantType } from "./types";
import { black } from "../../styles/Color";

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
    <Component
      style={{ color, ...styleProps[variant] }}
      ref={ref}
      {...htmlAttributes}
    >
      {children}
    </Component>
  );
};

const Component = styled.div`
  font-family: "Pretendard";
  word-break: keep-all;
  white-space: pre-line;
  letter-spacing: -2%;
`;

const styleProps = {
  [TypoVariant.H1]: {
    fontSize: "90px",
    fontWeight: 800,
    lineHeight: "124px",
  },
  [TypoVariant.H2]: {
    fontSize: "66px",
    fontWeight: 800,
    lineHeight: "90px",
  },
  [TypoVariant.H3]: {
    fontSize: "52px",
    fontWeight: 700,
    lineHeight: "72px",
  },
  [TypoVariant.H4]: {
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: "60px",
  },
  [TypoVariant.H5]: {
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "50px",
  },
  [TypoVariant.SH1]: {
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "34px",
  },
  [TypoVariant.SH2]: {
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "28px",
  },
  [TypoVariant.SH3]: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "22px",
  },
  [TypoVariant.SH4]: {
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "20px",
  },
  [TypoVariant.SH5]: {
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "18px",
  },
  [TypoVariant.B1]: {
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "28px",
  },
  [TypoVariant.B2]: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "26px",
  },
  [TypoVariant.B3]: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
  },
  [TypoVariant.B4]: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
  },
  [TypoVariant.B5]: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
  },
  [TypoVariant.B6]: {
    fontSize: "10px",
    fontWeight: 400,
    lineHeight: "14px",
  },
};

/**
 *  @Component Typography
 *  @props variant - 텍스트 스타일 {TypoVariant}
 *  @props color - 텍스트 색상 {string}
 *  @props children - 텍스트 {React.ReactNode}
 */
export default forwardRef(Typography);
