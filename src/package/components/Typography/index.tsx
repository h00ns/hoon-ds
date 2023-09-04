import styled from "@emotion/styled";
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { TypoVariantType } from "./constants";
import { useGetTypographyProps } from "./hooks";
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
  const [fontSize, fontWeight, lineHeight] = useGetTypographyProps(variant);

  return (
    <Component
      style={{ color, fontSize, fontWeight, lineHeight }}
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

/**
 *  @Component Typography
 *  @props variant - 텍스트 스타일 {TypoVariant}
 *  @props color - 텍스트 색상 {string}
 *  @props children - 텍스트 {React.ReactNode}
 */
export default forwardRef(Typography);
