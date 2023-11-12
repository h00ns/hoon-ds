import styled from "@emotion/styled";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { InputVariant, InputVariantType } from "./types";
import { Radius } from "../../styles/Radius";
import { black, gray, primary, red, white } from "../../styles/Color";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  readonly variant?: InputVariantType;
}

const Input = (
  { variant = InputVariant.DEFAULT, ...inputHtmlAttributes }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <Component
      style={{ ...styleProps[variant] }}
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

const styleProps = {
  [InputVariant.DEFAULT]: {
    backgroundColor: white,
    borderColor: gray.gray3,
    color: black,
  },
  [InputVariant.ERROR]: {
    backgroundColor: white,
    borderColor: red.red3,
    color: red.red3,
  },
  [InputVariant.FIXED]: {
    backgroundColor: gray.gray1,
    borderColor: "transparent",
    color: primary.gray,
  },
};

/**
 *  @Component Input
 *  @props variant - 인풋 스타일 {InputVariantType}
 */
export default forwardRef(Input);
