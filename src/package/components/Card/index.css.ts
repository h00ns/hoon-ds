import { style } from "@vanilla-extract/css";
import { white } from "../../styles/Color";
import { Radius } from "../../styles/Radius";
import { Shadow } from "../../styles/Shadow";

export const card = style({
  width: "100%",
  height: "100%",
  padding: 12,
  boxSizing: "border-box",
  backgroundColor: white,
  borderRadius: Radius.MEDIUM,
  boxShadow: Shadow.MEDIUM,
});
