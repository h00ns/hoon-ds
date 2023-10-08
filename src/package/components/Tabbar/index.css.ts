import { style } from "@vanilla-extract/css";
import { gray, primary } from "../../styles/Color";
import { recipe } from "@vanilla-extract/recipes";

export const tabbar = style({
  borderBottom: `1px solid ${gray.gray3}`,

  display: "flex",
  justifyContent: "center",
});

export const tabbarItem = recipe({
  base: {
    padding: "12px 16px",
    cursor: "pointer",
  },

  variants: {
    isSelect: {
      true: {
        padding: "12px 16px 8px",
        borderBottom: `4px solid ${primary.blue}`,
      },
    },
  },
});
