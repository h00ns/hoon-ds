import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";
import { TextareaVariant, TextareaVariantType } from "./constants";
import styled from "@emotion/styled";
import { Radius } from "../../styles/Radius";
import { useGetTextareaProps } from "./hooks";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  readonly variant?: TextareaVariantType;
}

const Textarea = (
  { variant = TextareaVariant.DEFAULT, ...textareaHtmlAttributes }: Props,
  ref: ForwardedRef<HTMLTextAreaElement>
) => {
  const [backgroundColor, borderColor, color] = useGetTextareaProps(variant);

  return (
    <Component
      style={{ backgroundColor, borderColor, color }}
      ref={ref}
      disabled={variant === TextareaVariant.FIXED}
      {...textareaHtmlAttributes}
    />
  );
};

const Component = styled.textarea`
  padding: 12px;
  font-size: 14px;
  border-radius: ${Radius.MEDIUM};
  border: 1px solid transparent;
  resize: none;

  &:focus {
    outline: none;
  }
`;

/**
 *  @Component Textarea
 *  @props variant - Textarea 스타일 {TextareaVariantType}
 */
export default forwardRef(Textarea);
