import { Radius } from "../../styles/Radius";
import { blue, gray, primary } from "../../styles/Color";
import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";

export const fileUploader = recipe({
  base: {
    padding: 24,
    boxSizing: "border-box",
    borderRadius: Radius.MEDIUM,
    border: `1px dashed ${gray.gray3}`,
    cursor: "pointer",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: 8,
  },

  variants: {
    isDragging: {
      true: {
        backgroundColor: blue.blue1,
        borderColor: primary.blue,
      },
    },
  },
});

export const pointerEventsNone = style({
  pointerEvents: "none",
});

export const textDescription = recipe({
  base: {
    fontSize: 14,
    marginBottom: 16,
    color: primary.gray,
  },

  variants: {
    isDragging: {
      true: {
        color: blue.blue3,
      },
    },
  },
});
