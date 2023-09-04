import { Meta, StoryObj } from "@storybook/react";
import Icon from ".";
import { icons } from "./icons";
import { primary } from "../../styles/Color";

const meta = {
  title: "Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: Object.keys(icons),
    },
    fill: {
      control: "color",
    },
    stroke: {
      control: "color",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "24px",
    name: "search",
    fill: "transparent",
    stroke: primary.gray,
  },
};
