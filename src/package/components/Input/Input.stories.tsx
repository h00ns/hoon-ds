import { Meta, StoryObj } from "@storybook/react";
import { InputVariant } from "./constants";
import Input from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Input의 스타일입니다.",
      control: "radio",
      options: [InputVariant.DEFAULT, InputVariant.ERROR, InputVariant.FIXED],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const commonArgs = {};

export const Default: Story = {
  args: {
    ...commonArgs,
    variant: InputVariant.DEFAULT,
  },
};
export const Error: Story = {
  args: {
    ...commonArgs,
    variant: InputVariant.ERROR,
  },
};
export const Fixed: Story = {
  args: {
    ...commonArgs,
    variant: InputVariant.FIXED,
  },
};
