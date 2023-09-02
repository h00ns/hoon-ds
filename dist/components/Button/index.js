var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from "@emotion/styled";
import { forwardRef } from "react";
import { ButtonVariant } from "./constants";
import { useGetButtonProps } from "./hooks";
export var Component = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 10px 12px;\n  font-size: 14px;\n  border-radius: 8px;\n  border: 1px solid transparent;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  /* only hover */\n  ", "\n"], ["\n  padding: 10px 12px;\n  font-size: 14px;\n  border-radius: 8px;\n  border: 1px solid transparent;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  /* only hover */\n  ", "\n"])), function (_a) {
    var hoverColor = _a.hoverColor;
    return hoverColor &&
        "\n    &:hover {\n      background-color: ".concat(hoverColor, "\n    }\n  ");
});
/**
 *  @Component - Button
 *  @props text - 버튼 텍스트 (string)
 *  @props variant - 버튼 스타일 (ButtonVariant)
 *  @props type - 버튼 타입 ('button' | 'submit' | 'reset')
 *  @props disabled - 버튼 비활성화 (boolean)
 *  @props onClick - 버튼 클릭 이벤트 (() => void)
 */
var Button = function (_a, ref) {
    var text = _a.text, _b = _a.variant, variant = _b === void 0 ? ButtonVariant.PRIMARY : _b, _c = _a.type, type = _c === void 0 ? "submit" : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, onClick = _a.onClick;
    var _e = useGetButtonProps(variant, disabled), backgroundColor = _e[0], color = _e[1], borderColor = _e[2], hoverColor = _e[3];
    return (_jsx(Component, __assign({ style: { backgroundColor: backgroundColor, color: color, borderColor: borderColor }, hoverColor: hoverColor, type: type, onClick: onClick }, { children: text })));
};
export default forwardRef(Button);
var templateObject_1;
