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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from "@emotion/styled";
import { forwardRef } from "react";
import { ButtonVariant } from "./constants";
import { useGetButtonProps } from "./hooks";
/**
 *  @Component - Button
 *  @props text - 버튼 텍스트 {string}
 *  @props variant - 버튼 스타일 {ButtonVariant}
 *  @props disabled - 버튼 비활성화 {boolean}
 */
var Button = function (_a, ref) {
    var text = _a.text, _b = _a.variant, variant = _b === void 0 ? ButtonVariant.PRIMARY : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, buttonHtmlAttributes = __rest(_a, ["text", "variant", "disabled"]);
    var _d = useGetButtonProps(variant, disabled), backgroundColor = _d[0], color = _d[1], borderColor = _d[2], hoverColor = _d[3];
    return (_jsx(Component, __assign({ style: { backgroundColor: backgroundColor, color: color, borderColor: borderColor }, hoverColor: hoverColor }, buttonHtmlAttributes, { children: text })));
};
export var Component = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 10px 12px;\n  font-size: 14px;\n  border-radius: 8px;\n  border: 1px solid transparent;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  /* only hover */\n  ", "\n"], ["\n  padding: 10px 12px;\n  font-size: 14px;\n  border-radius: 8px;\n  border: 1px solid transparent;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  /* only hover */\n  ", "\n"])), function (_a) {
    var hoverColor = _a.hoverColor;
    return hoverColor &&
        "\n    &:hover {\n      background-color: ".concat(hoverColor, "!important;\n    }\n  ");
});
export default forwardRef(Button);
var templateObject_1;
