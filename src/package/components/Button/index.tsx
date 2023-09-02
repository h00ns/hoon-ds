import styled from "@emotion/styled";
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { ButtonVariant, ButtonVariantType } from "./constants";
import { useGetButtonProps } from "./hooks";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly text: string;
  readonly variant?: ButtonVariantType;
  readonly disabled?: boolean;
}

/**
 *  @Component - Button
 *  @props text - 버튼 텍스트 {string}
 *  @props variant - 버튼 스타일 {ButtonVariant}
 *  @props disabled - 버튼 비활성화 {boolean}
 */
const Button = (
  {
    text,
    variant = ButtonVariant.PRIMARY,
    disabled = false,
    ...htmlButtonAttributes
  }: Props,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const [backgroundColor, color, borderColor, hoverColor] = useGetButtonProps(
    variant,
    disabled
  );

  return (
    <Component
      style={{ backgroundColor, color, borderColor }}
      hoverColor={hoverColor}
      {...htmlButtonAttributes}
    >
      {text}
    </Component>
  );
};

export const Component = styled.button<{ hoverColor: string }>`
  padding: 10px 12px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  /* only hover */
  ${({ hoverColor }) =>
    hoverColor &&
    `
    &:hover {
      background-color: ${hoverColor}!important;
    }
  `}
`;

export default forwardRef(Button);
