import { Meta, StoryObj } from "@storybook/react";
import { ButtonVariant } from "./types";
import Button from ".";
import { icons } from "../Icon/icons";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
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
    fullWidth: {
      description: "Button의 fullWidth 여부입니다.",
    },
    iconName: {
      description: "Button에 들어갈 아이콘입니다.",
      control: "select",
      options: ["", ...Object.keys(icons)],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const commonArgs = {
  text: "Button",
  disabled: false,
  fullWidth: false,
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
