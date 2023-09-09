import { Meta, StoryObj } from "@storybook/react";
import Skeleton from ".";

const meta: Meta<typeof Skeleton> = {
  title: "Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      description: "스켈레톤의 너비를 설정합니다.",
    },
    height: {
      description: "스켈레톤의 높이를 설정합니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "320px",
    height: "320px",
  },
};
