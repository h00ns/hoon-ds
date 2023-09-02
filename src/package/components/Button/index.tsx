import styled from "@emotion/styled";
import { ForwardedRef, forwardRef } from "react";
import { ButtonVariant, ButtonVariantType } from "./constants";
import { useGetButtonProps } from "./hooks";

type Props = {
  readonly text: string;
  readonly variant?: ButtonVariantType;
  readonly type?: "button" | "submit" | "reset";
  readonly disabled?: boolean;
  readonly onClick?: () => void;
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
      background-color: ${hoverColor}
    }
  `}
`;

/**
 *  @Component - Button
 *  @props text - 버튼 텍스트 (string)
 *  @props variant - 버튼 스타일 (ButtonVariant)
 *  @props type - 버튼 타입 ('button' | 'submit' | 'reset')
 *  @props disabled - 버튼 비활성화 (boolean)
 *  @props onClick - 버튼 클릭 이벤트 (() => void)
 */
const Button = (
  {
    text,
    variant = ButtonVariant.PRIMARY,
    type = "submit",
    disabled = false,
    onClick,
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
      type={type}
      onClick={onClick}
    >
      {text}
    </Component>
  );
};

export default forwardRef(Button);
