import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { textField } from "./index.css";
import { TextFieldVariant, TextFieldVariantType } from "./types";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  readonly variant?: TextFieldVariantType;
}

const TextField = (
  { variant = TextFieldVariant.DEFAULT, ...inputHtmlAttributes }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <input
      className={textField({ variant })}
      disabled={variant === TextFieldVariant.FIXED}
      {...inputHtmlAttributes}
      ref={ref}
    />
  );
};

/**
 *  @Component Input
 *  @props variant - 인풋 스타일 {TextFieldVariantType}
 */
export default forwardRef(TextField);
