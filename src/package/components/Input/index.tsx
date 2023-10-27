import styled from "@emotion/styled";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { InputVariant, InputVariantType } from "./constants";
import { useGetInputProps } from "./hooks";
import { Radius } from "../../styles/Radius";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  readonly variant?: InputVariantType;
}

const Input = (
  { variant = InputVariant.DEFAULT, ...inputHtmlAttributes }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [backgroundColor, borderColor, color] = useGetInputProps(variant);

  return (
    <Component
      style={{ backgroundColor, borderColor, color }}
      disabled={variant === InputVariant.FIXED}
      {...inputHtmlAttributes}
      ref={ref}
    />
  );
};

const Component = styled.input`
  flex: 1;
  width: 100%;
  padding: 9px 12px;
  font-size: 14px;
  line-height: 20px;
  box-sizing: border-box;
  border-radius: ${Radius.MEDIUM};
  border: 1px solid transparent;

  &:focus {
    outline: none;
  }
`;

/**
 *  @Component Input
 *  @props variant - 인풋 스타일 {InputVariantType}
 */
export default forwardRef(Input);
