import { style } from "@vanilla-extract/css";
import { gray, white } from "../../styles/Color";
import { Radius } from "../../styles/Radius";
import { Shadow } from "../../styles/Shadow";

export const dropdown = style({
  position: "relative",
});

export const selectBox = style({
  padding: "9px 12px",
  boxSizing: "border-box",
  border: `1px solid ${gray.gray3}`,
  borderRadius: Radius.MEDIUM,
  fontSize: 14,
  lineHeight: "20px",
  cursor: "pointer",

  display: "flex",
  columnGap: 12,
  justifyContent: "space-between",
  alignItems: "center",
});

export const optionBox = style({
  width: "100%",
  padding: 8,
  boxSizing: "border-box",
  backgroundColor: white,
  border: `1px solid ${gray.gray3}`,
  borderRadius: Radius.MEDIUM,
  boxShadow: Shadow.MEDIUM,
  zIndex: 999,

  position: "absolute",
  top: 48,

  display: "grid",
  rowGap: 4,
});

export const optionItem = style({
  padding: "10px 12px",
  backgroundColor: white,
  borderRadius: Radius.MEDIUM,
  fontSize: 14,
  cursor: "pointer",

  ":hover": {
    backgroundColor: gray.gray1,
  },
});
