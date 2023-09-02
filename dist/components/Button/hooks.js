import { useMemo } from "react";
import { gray } from "../../styles/Color";
export var useGetButtonProps = function (variant, disabled) {
    var _a = useMemo(function () {
        if (disabled) {
            return [gray.gray2, gray.gray5, gray.gray3, gray.gray2];
        }
        return [gray.gray2, gray.gray5, gray.gray3, gray.gray2];
    }, [variant]), backgroundColor = _a[0], color = _a[1], borderColor = _a[2], hoverColor = _a[3];
    return [backgroundColor, color, borderColor, hoverColor];
};
