import { keyframes, style } from "@vanilla-extract/css";
import { Radius } from "../../styles/Radius";
import { primary } from "../../styles/Color";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const indicator = style({
  border: "2px solid",
  borderRadius: Radius.MAXIMUM,
  borderColor: `${primary.gray} rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.2)`,
  animation: `${spin} 1.15s cubic-bezier(0.31, 0.63, 0.8, 0.73) infinite`,
});
