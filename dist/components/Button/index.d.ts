import { ButtonHTMLAttributes } from "react";
import { ButtonVariantType } from "./constants";
import { IconName } from "../Icon/icons";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    readonly text: string;
    readonly variant?: ButtonVariantType;
    readonly disabled?: boolean;
    readonly iconName?: IconName;
}
/**
 *  @Component Button
 *  @props text - 버튼 텍스트 {string}
 *  @props variant - 버튼 스타일 {ButtonVariant}
 *  @props disabled - 버튼 비활성화 {boolean}
 */
declare const _default: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLButtonElement>>;
export default _default;
