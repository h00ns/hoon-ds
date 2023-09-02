import { Meta, StoryObj } from "@storybook/react";
import { ButtonVariant } from "./constants";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Button의 스타일입니다.",
      control: "radio",
      options: [
        ButtonVariant.PRIMARY,
        ButtonVariant.OUTLINE,
        ButtonVariant.RED,
        ButtonVariant.GRAY,
        ButtonVariant.GREEN,
      ],
    },
    text: {
      description: "Button에 들어갈 텍스트입니다.",
    },
    disabled: {
      description: "Button의 비활성화 여부입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const commonArgs = {
  text: "Button",
  disabled: false,
};

export const Primary: Story = {
  args: {
    ...commonArgs,
    variant: ButtonVariant.PRIMARY,
  },
};
export const Outline: Story = {
  args: {
    ...commonArgs,
    variant: ButtonVariant.OUTLINE,
  },
};
export const Red: Story = {
  args: {
    ...commonArgs,
    variant: ButtonVariant.RED,
  },
};
export const Gray: Story = {
  args: {
    ...commonArgs,
    variant: ButtonVariant.GRAY,
  },
};
export const Green: Story = {
  args: {
    ...commonArgs,
    variant: ButtonVariant.GREEN,
  },
};
