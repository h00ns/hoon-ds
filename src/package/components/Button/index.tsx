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
}

const Button = (
  {
    text,
    variant = ButtonVariant.PRIMARY,
    disabled = false,
    iconName,
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
      style={{ backgroundColor, color, borderColor }}
      hoverColor={hoverColor}
      {...buttonHtmlAttributes}
    >
      {text}

      {/* only icon */}
      {iconName && <Icon size={"16px"} name={iconName} stroke={color} />}
      {/* only icon end */}
    </Component>
  );
};

const Component = styled.button<{ hoverColor: string }>`
  padding: 9px 12px;
  font-size: 14px;
  line-height: 20px;
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
  column-gap: 8px;
`;

/**
 *  @Component Button
 *  @props text - 버튼 텍스트 {string}
 *  @props variant - 버튼 스타일 {ButtonVariant}
 *  @props disabled - 버튼 비활성화 {boolean}
 */
export default forwardRef(Button);
