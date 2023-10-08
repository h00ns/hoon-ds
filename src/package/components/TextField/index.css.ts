import { recipe } from "@vanilla-extract/recipes";
import { Radius } from "../../styles/Radius";
import { TextFieldVariant } from "./types";
import { black, gray, primary, red, white } from "../../styles/Color";

export const textField = recipe({
  base: {
    width: "100%",
    padding: "9px 12px",
    boxSizing: "border-box",
    fontSize: 14,
    lineHeight: "20px",
    borderRadius: Radius.MEDIUM,
    border: "1px solid",

    ":focus": {
      outline: "none",
    },
  },

  variants: {
    variant: {
      [TextFieldVariant.DEFAULT]: {
        backgroundColor: white,
        borderColor: gray.gray3,
        color: black,
      },
      [TextFieldVariant.ERROR]: {
        backgroundColor: white,
        borderColor: red.red3,
        color: red.red3,
      },
      [TextFieldVariant.FIXED]: {
        backgroundColor: gray.gray1,
        borderColor: "transparent",
        color: primary.gray,
      },
    },
  },
});
