import { Radius } from "./../Radius/index";
import { style } from "@vanilla-extract/css";

export const shadowComponent = style({
  width: 320,
  height: 320,
  borderRadius: Radius.MEDIUM,
});
