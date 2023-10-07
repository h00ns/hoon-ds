import { AlertVariant } from "./types";
import { Radius } from "../../styles/Radius";
import { recipe } from "@vanilla-extract/recipes";
import { blue, red } from "../../styles/Color";

export const alert = recipe({
  base: {
    width: "100%",
    boxSizing: "border-box",
    padding: 12,
    borderRadius: Radius.MEDIUM,

    display: "flex",
    alignItems: "center",
    columnGap: 12,
  },

  variants: {
    variant: {
      [AlertVariant.PRIMARY]: {
        backgroundColor: blue.blue1,
      },
      [AlertVariant.ERROR]: {
        backgroundColor: red.red1,
      },
    },
  },
});
