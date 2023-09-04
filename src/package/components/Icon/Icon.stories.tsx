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
      description: "Icon의 이름입니다.",
      control: "select",
      options: Object.keys(icons),
    },
    fill: {
      description: "Icon의 색상(fill) 입니다.",
      control: "color",
    },
    stroke: {
      description: "Icon의 색상(stroke) 입니다.",
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
