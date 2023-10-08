import { Radius } from "../../styles/Radius";
import { recipe } from "@vanilla-extract/recipes";
import { TextareaVariant } from "./types";
import { black, gray, primary, red, white } from "../../styles/Color";

export const textarea = recipe({
  base: {
    padding: 12,
    fontSize: 14,
    borderRadius: Radius.MEDIUM,
    border: "1px solid",
    resize: "none",

    ":focus": {
      outline: "none",
    },
  },

  variants: {
    variant: {
      [TextareaVariant.DEFAULT]: {
        backgroundColor: white,
        borderColor: gray.gray3,
        color: black,
      },
      [TextareaVariant.ERROR]: {
        backgroundColor: white,
        borderColor: red.red3,
        color: red.red3,
      },
      [TextareaVariant.FIXED]: {
        backgroundColor: gray.gray1,
        borderColor: "transparent",
        color: primary.gray,
      },
    },
  },
});
