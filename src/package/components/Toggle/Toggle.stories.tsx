import { Meta, StoryObj } from "@storybook/react";
import Toggle from ".";

const meta: Meta<typeof Toggle> = {
  title: "Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checkStatus: {
      description: "토글 상태입니다.",
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checkStatus: true,
  },
};
