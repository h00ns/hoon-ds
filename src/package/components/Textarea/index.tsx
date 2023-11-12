import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";
import { TextareaVariant, TextareaVariantType } from "./types";
import styled from "@emotion/styled";
import { Radius } from "../../styles/Radius";
import { black, gray, primary, red, white } from "../../styles/Color";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  readonly variant?: TextareaVariantType;
}

const Textarea = (
  { variant = TextareaVariant.DEFAULT, ...textareaHtmlAttributes }: Props,
  ref: ForwardedRef<HTMLTextAreaElement>
) => {
  return (
    <Component
      style={{ ...styleProps[variant] }}
      ref={ref}
      disabled={variant === TextareaVariant.FIXED}
      {...textareaHtmlAttributes}
    />
  );
};

const Component = styled.textarea`
  padding: 12px;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: ${Radius.MEDIUM};
  border: 1px solid transparent;
  resize: none;

  &:focus {
    outline: none;
  }
`;

const styleProps = {
  [TextareaVariant.DEFAULT]: {
    backgroundColor: white,
    borderColor: gray.gray3,
    color: black,
  },
  [TextareaVariant.ERROR]: {
    backgroundColor: white,
    borderColor: red.red3,
    color: red.red3,
  },
  [TextareaVariant.FIXED]: {
    backgroundColor: gray.gray1,
    borderColor: "transparent",
    color: primary.gray,
  },
};

/**
 *  @Component Textarea
 *  @props variant - Textarea 스타일 {TextareaVariantType}
 */
export default forwardRef(Textarea);
