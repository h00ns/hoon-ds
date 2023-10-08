import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { gray, primary, white } from "../../styles/Color";
import { Radius } from "../../styles/Radius";

export const pagination = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 4,
});

export const pageItem = recipe({
  base: {
    minWidth: 32,
    height: 32,
    padding: "0 8px",
    color: primary.gray,
    borderRadius: Radius.MEDIUM,
    boxSizing: "border-box",
    cursor: "pointer",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  variants: {
    isSelect: {
      true: {
        color: white,
        backgroundColor: primary.blue,
      },
      false: {
        ":hover": {
          backgroundColor: gray.gray1,
        },
      },
    },
  },

  defaultVariants: {
    isSelect: false,
  },
});
