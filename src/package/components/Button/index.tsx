import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { ButtonVariant, ButtonVariantType } from "./types";
import { IconName } from "../Icon/icons";
import Icon from "../Icon";
import { button } from "./index.css";
import { gray, red, white } from "../../styles/Color";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly text: string;
  readonly variant?: ButtonVariantType;
  readonly disabled?: boolean;
  readonly fullWidth?: boolean;
  readonly iconName?: IconName;
}

const Button = (
  {
    text,
    variant = ButtonVariant.PRIMARY,
    disabled = false,
    fullWidth = false,
    iconName,
    ...buttonHtmlAttributes
  }: Props,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const iconColor = disabled
    ? gray.gray5
    : {
        [ButtonVariant.PRIMARY]: white,
        [ButtonVariant.OUTLINE]: gray.gray6,
        [ButtonVariant.RED]: red.red3,
        [ButtonVariant.GRAY]: white,
        [ButtonVariant.GREEN]: white,
      }[variant];

  return (
    <button
      className={button({ variant, disabled, fullWidth })}
      ref={ref}
      {...buttonHtmlAttributes}
    >
      {text}

      {/* only icon */}
      {iconName && <Icon size={"20px"} name={iconName} stroke={iconColor} />}
      {/* only icon end */}
    </button>
  );
};

/**
 *  @Component Button
 *  @props text - 버튼 텍스트 {string}
 *  @props variant - 버튼 스타일 {ButtonVariant}
 *  @props disabled - 버튼 비활성화 {boolean}
 */
export default forwardRef(Button);
