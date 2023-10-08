import { style } from "@vanilla-extract/css";
import { Shadow } from "../Shadow";
import { gray } from "../Color";

export const radiusComponent = style({
  width: 320,
  height: 320,
  boxShadow: Shadow.MEDIUM,
  border: `1px solid ${gray.gray1}`,
});
