import { Meta, StoryObj } from "@storybook/react";
import { TypoVariant } from "./constants";
import Typography from ".";
import { black } from "../../styles/Color";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: `Heading / Sub Heading / Body 세가지의 경우로 나뉩니다.`,
      control: "select",
      options: [
        TypoVariant.H1,
        TypoVariant.H2,
        TypoVariant.H3,
        TypoVariant.H4,
        TypoVariant.H1,
        TypoVariant.SH1,
        TypoVariant.SH2,
        TypoVariant.SH3,
        TypoVariant.SH4,
        TypoVariant.SH5,
        TypoVariant.B1,
        TypoVariant.B2,
        TypoVariant.B3,
        TypoVariant.B4,
        TypoVariant.B5,
        TypoVariant.B6,
      ],
    },
    color: {
      description: "텍스트 색상입니다.",
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: TypoVariant.H1,
    children: "Typography",
    color: black,
  },
};
