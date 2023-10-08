import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { Radius } from "../../styles/Radius";
import { gray, primary, white } from "../../styles/Color";

export const toggle = recipe({
  base: {
    boxSizing: "border-box",
    width: 44,
    height: 24,
    padding: 2,
    cursor: "pointer",

    borderRadius: Radius.MAXIMUM,

    display: "flex",
  },

  variants: {
    checkStatus: {
      true: {
        justifyContent: "flex-end",
        backgroundColor: primary.blue,
      },
      false: {
        justifyContent: "flex-start",
        backgroundColor: gray.gray1,
      },
    },
  },
});

export const circle = style({
  width: 20,
  height: 20,
  backgroundColor: white,
  borderRadius: Radius.MAXIMUM,
});
