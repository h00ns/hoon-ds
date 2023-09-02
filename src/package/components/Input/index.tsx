import styled from "@emotion/styled";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { InputVariant, InputVariantType } from "./constants";
import { useGetInputProps } from "./hooks";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  readonly variant?: InputVariantType;
}

/**
 *  @Component - Input
 *  @props variant - 인풋 스타일 {InputVariantType}
 */
const Input = (
  { variant = InputVariant.DEFAULT, ...htmlAttributes }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [backgroundColor, borderColor] = useGetInputProps(variant);

  return (
    <Component
      style={{ backgroundColor, borderColor }}
      disabled={variant === InputVariant.FIXED}
      {...htmlAttributes}
      ref={ref}
    />
  );
};

const Component = styled.input`
  padding: 10px 12px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid transparent;

  &:focus {
    outline: none;
  }
`;

export default forwardRef(Input);
