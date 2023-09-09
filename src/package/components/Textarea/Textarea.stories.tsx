import { Meta, StoryObj } from "@storybook/react";
import { TextareaVariant } from "./constants";
import Textarea from ".";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Textarea의 스타일입니다.",
      control: "radio",
      options: [
        TextareaVariant.DEFAULT,
        TextareaVariant.ERROR,
        TextareaVariant.FIXED,
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
    variant: TextareaVariant.DEFAULT,
  },
};
export const Error: Story = {
  args: {
    ...commonArgs,
    variant: TextareaVariant.ERROR,
  },
};
export const Fixed: Story = {
  args: {
    ...commonArgs,
    variant: TextareaVariant.FIXED,
  },
};
