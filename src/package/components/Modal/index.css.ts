import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { white } from "../../styles/Color";
import { Radius } from "../../styles/Radius";

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const background = recipe({
  base: {
    minWidth: "100%",
    minHeight: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",

    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 999,

    display: "none",
    animation: `${fadeIn} 0.15s ease-in-out`,
  },

  variants: {
    openModal: {
      true: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
});

export const modal = style({
  padding: 24,
  backgroundColor: white,
  borderRadius: Radius.MEDIUM,
});

export const title = style({
  marginBottom: 24,
  fontSize: 20,
  fontWeight: 700,
  lineHeight: "28px",
});

export const content = style({
  marginBottom: 20,
});
