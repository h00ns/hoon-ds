import { Meta, StoryObj } from "@storybook/react";
import Indicator from ".";

const meta: Meta<typeof Indicator> = {
  title: "Components/Indicator",
  component: Indicator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Indicator의 크기입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "16px",
  },
};
