import styled from "@emotion/styled";
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { ButtonVariant, ButtonVariantType } from "./types";
import { IconName } from "../Icon/icons";
import Icon from "../Icon";
import { Radius } from "../../styles/Radius";
import { blue, gray, green, primary, red, white } from "../../styles/Color";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  const { hoverColor, ...buttonStyleProps } = disabled
    ? disabledStyleProps
    : styleProps[variant];

  return (
    <Component
      ref={ref}
      disabled={disabled}
      style={{ ...buttonStyleProps }}
      hoverColor={hoverColor}
      fullWidth={fullWidth}
      {...buttonHtmlAttributes}
    >
      {text}

      {/* only icon */}
      {iconName && (
        <Icon size={"16px"} name={iconName} stroke={buttonStyleProps.color} />
      )}
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

const styleProps = {
  [ButtonVariant.PRIMARY]: {
    backgroundColor: primary.blue,
    color: white,
    borderColor: "transparent",
    hoverColor: blue.blue3,
  },
  [ButtonVariant.OUTLINE]: {
    backgroundColor: white,
    color: gray.gray6,
    borderColor: gray.gray3,
    hoverColor: gray.gray1,
  },
  [ButtonVariant.RED]: {
    backgroundColor: red.red3,
    color: white,
    borderColor: "transparent",
    hoverColor: red.red2,
  },
  [ButtonVariant.GRAY]: {
    backgroundColor: gray.gray6,
    color: white,
    borderColor: "transparent",
    hoverColor: gray.gray5,
  },
  [ButtonVariant.GREEN]: {
    backgroundColor: green.green3,
    color: white,
    borderColor: "transparent",
    hoverColor: green.green2,
  },
};

const disabledStyleProps = {
  backgroundColor: gray.gray3,
  color: gray.gray5,
  borderColor: gray.gray3,
  hoverColor: gray.gray3,
};

/**
 *  @Component Button
 *  @props text - 버튼 텍스트 {string}
 *  @props variant - 버튼 스타일 {ButtonVariant}
 *  @props disabled - 버튼 비활성화 {boolean}
 */
export default forwardRef(Button);
