import { style } from "@vanilla-extract/css";
import { black, gray, primary } from "../../styles/Color";

export const head = style({
  border: `1px solid ${gray.gray3}`,

  display: "grid",
});

export const headItem = style({
  padding: 12,
  fontSize: 14,
  lineHeight: "20px",
  color: primary.gray,
});

export const body = style({
  border: `1px solid ${gray.gray3}`,
  borderTop: "none",
});

export const row = style({
  borderBottom: `1px solid ${gray.gray3}`,
  cursor: "pointer",

  display: "grid",

  ":hover": {
    background: gray.gray1,
  },

  ":last-of-type": {
    borderBottom: "none",
  },
});

export const rowItem = style([
  headItem,
  {
    color: black,
    borderRight: `1px solid ${gray.gray3}`,

    ":last-of-type": {
      borderRight: "none",
    },
  },
]);
