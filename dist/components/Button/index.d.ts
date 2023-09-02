/// <reference types="react" />
import { ButtonVariantType } from "./constants";
type Props = {
    readonly text: string;
    readonly variant?: ButtonVariantType;
    readonly type?: "button" | "submit" | "reset";
    readonly disabled?: boolean;
    readonly onClick?: () => void;
};
export declare const Component: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & {
    hoverColor: string;
}, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
declare const _default: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLButtonElement>>;
export default _default;
