import styled from "@emotion/styled";
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { ButtonVariant, ButtonVariantType } from "./constants";
import { useGetButtonProps } from "./hooks";
import { IconName } from "../Icon/icons";
import Icon from "../Icon";
import { Radius } from "../../styles/Radius";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly text: string;
  readonly variant?: ButtonVariantType;
  readonly disabled?: boolean;
  readonly iconName?: IconName;
  readonly fullWidth?: boolean;
}

const Button = (
  {
    text,
    variant = ButtonVariant.PRIMARY,
    disabled = false,
    iconName,
    fullWidth = false,
    ...buttonHtmlAttributes
  }: Props,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const [backgroundColor, color, borderColor, hoverColor] = useGetButtonProps(
    variant,
    disabled
  );

  return (
    <Component
      ref={ref}
      disabled={disabled}
      style={{ backgroundColor, color, borderColor }}
      hoverColor={hoverColor}
      fullWidth={fullWidth}
      {...buttonHtmlAttributes}
    >
      {text}

      {/* only icon */}
      {iconName && <Icon size={"16px"} name={iconName} stroke={color} />}
      {/* only icon end */}
    </Component>
  );
};

const Component = styled.button<{ hoverColor: string; fullWidth: boolean }>`
  padding: 9px 12px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  border-radius: ${Radius.MEDIUM};
  box-sizing: border-box;
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

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;

  /* is FullWidth */
  ${({ fullWidth }) => fullWidth && `width: 100%;`}
`;

/**
 *  @Component Button
 *  @props text - 버튼 텍스트 {string}
 *  @props variant - 버튼 스타일 {ButtonVariant}
 *  @props disabled - 버튼 비활성화 {boolean}
 */
export default forwardRef(Button);
