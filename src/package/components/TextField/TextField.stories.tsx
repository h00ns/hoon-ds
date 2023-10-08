import { Meta, StoryObj } from "@storybook/react";
import { TextFieldVariant } from "./types";
import Input from ".";

const meta: Meta<typeof Input> = {
  title: "Components/TextField",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Input의 스타일입니다.",
      control: "radio",
      options: [
        TextFieldVariant.DEFAULT,
        TextFieldVariant.ERROR,
        TextFieldVariant.FIXED,
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const commonArgs = {};

export const Default: Story = {
  args: {
    ...commonArgs,
    variant: TextFieldVariant.DEFAULT,
  },
};
export const Error: Story = {
  args: {
    ...commonArgs,
    variant: TextFieldVariant.ERROR,
  },
};
export const Fixed: Story = {
  args: {
    ...commonArgs,
    variant: TextFieldVariant.FIXED,
  },
};
