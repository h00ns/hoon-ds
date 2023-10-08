import { keyframes, style } from "@vanilla-extract/css";
import { Radius } from "../../styles/Radius";
import { gray } from "../../styles/Color";

const skeletonGradient = keyframes({
  "0%": {
    backgroundColor: gray.gray1,
  },
  "50%": {
    backgroundColor: gray.gray3,
  },
  "100%": {
    backgroundColor: gray.gray1,
  },
});

export const skeleton = style({
  flex: 1,
  boxSizing: "border-box",
  borderRadius: Radius.LARGE,

  animation: `${skeletonGradient} 2s ease-in-out infinite`,
});
