import { ButtonHTMLAttributes } from "react";
import { ButtonVariantType } from "./constants";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    readonly text: string;
    readonly variant?: ButtonVariantType;
    readonly disabled?: boolean;
}
export declare const Component: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & {
    hoverColor: string;
}, import("react").DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
declare const _default: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLButtonElement>>;
export default _default;
