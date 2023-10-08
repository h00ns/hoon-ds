import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";
import { TextareaVariant, TextareaVariantType } from "./types";
import { textarea } from "./index.css";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  readonly variant?: TextareaVariantType;
}

const Textarea = (
  { variant = TextareaVariant.DEFAULT, ...textareaHtmlAttributes }: Props,
  ref: ForwardedRef<HTMLTextAreaElement>
) => {
  return (
    <textarea
      className={textarea({ variant })}
      ref={ref}
      disabled={variant === TextareaVariant.FIXED}
      {...textareaHtmlAttributes}
    />
  );
};

/**
 *  @Component Textarea
 *  @props variant - Textarea 스타일 {TextareaVariantType}
 */
export default forwardRef(Textarea);
