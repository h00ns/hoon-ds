import { recipe } from "@vanilla-extract/recipes";
import { Radius } from "../../styles/Radius";
import { ButtonVariant } from "./types";
import { blue, gray, green, primary, red, white } from "../../styles/Color";

export const button = recipe({
  base: {
    padding: "9px 12px",
    fontSize: 14,
    lineHeight: "20px",
    boxSizing: "border-box",
    borderRadius: Radius.MEDIUM,
    border: "1px solid transparent",
    cursor: "pointer",

    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    columnGap: 8,

    ":focus": {
      outline: "none",
    },
  },

  variants: {
    // variant
    variant: {
      [ButtonVariant.PRIMARY]: {
        backgroundColor: primary.blue,
        color: white,

        ":hover": {
          backgroundColor: blue.blue3,
        },
      },
      [ButtonVariant.OUTLINE]: {
        backgroundColor: white,
        color: gray.gray6,
        borderColor: gray.gray3,

        ":hover": {
          backgroundColor: gray.gray1,
        },
      },
      [ButtonVariant.RED]: {
        backgroundColor: red.red3,
        color: white,

        ":hover": {
          backgroundColor: red.red2,
        },
      },
      [ButtonVariant.GRAY]: {
        backgroundColor: gray.gray6,
        color: white,

        ":hover": {
          backgroundColor: gray.gray5,
        },
      },
      [ButtonVariant.GREEN]: {
        backgroundColor: green.green3,
        color: white,

        ":hover": {
          backgroundColor: green.green2,
        },
      },
    },
    // disabled
    disabled: {
      true: {
        backgroundColor: gray.gray3,
        color: gray.gray5,
        borderColor: gray.gray3,

        ":hover": {
          backgroundColor: gray.gray1,
        },
      },
    },
    fullWidth: {
      true: {
        width: "100%",
      },
    },
  },
});
