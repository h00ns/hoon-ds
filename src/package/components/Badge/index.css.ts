import { recipe } from "@vanilla-extract/recipes";
import { Radius } from "../../styles/Radius";
import { gray, green, primary, red, white } from "../../styles/Color";
import { BadgeVariant } from "./types";

export const badge = recipe({
  base: {
    padding: "6px 8px",
    borderRadius: Radius.MEDIUM,
    fontSize: 12,
    color: white,
  },

  variants: {
    variant: {
      [BadgeVariant.PRIMARY]: {
        backgroundColor: primary.blue,
      },
      [BadgeVariant.RED]: {
        backgroundColor: red.red3,
      },
      [BadgeVariant.GRAY]: {
        backgroundColor: gray.gray6,
      },
      [BadgeVariant.GREEN]: {
        backgroundColor: green.green3,
      },
    },
  },
});
