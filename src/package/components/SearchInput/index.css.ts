import { style } from "@vanilla-extract/css";
import { gray, white } from "../../styles/Color";
import { Radius } from "../../styles/Radius";

export const searchInput = style({
  padding: "9px 12px",
  boxSizing: "border-box",
  backgroundColor: white,
  border: `1px solid ${gray.gray3}`,
  borderRadius: Radius.MEDIUM,

  display: "flex",
  alignItems: "center",
  columnGap: 12,
});

export const iconWrapper = style({
  width: 16,
  height: 16,
  cursor: "pointer",
});

export const input = style({
  flex: 1,
  fontSize: 14,
  lineHeight: "20px",
  padding: 0,
  border: "none",

  ":focus": {
    outline: "none",
  },
});
