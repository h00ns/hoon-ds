import { Meta, StoryObj } from "@storybook/react";
import { BadgeVariant } from "./constants";
import Badge from ".";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Badge의 스타일입니다.",
      control: "radio",
      options: [
        BadgeVariant.PRIMARY,
        BadgeVariant.RED,
        BadgeVariant.GRAY,
        BadgeVariant.GREEN,
      ],
    },
    text: {
      description: "Badge에 들어갈 텍스트입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const commonArgs = {
  text: "Badge",
};

export const Primary: Story = {
  args: {
    ...commonArgs,
    variant: BadgeVariant.PRIMARY,
  },
};
export const Red: Story = {
  args: {
    ...commonArgs,
    variant: BadgeVariant.RED,
  },
};
export const Gray: Story = {
  args: {
    ...commonArgs,
    variant: BadgeVariant.GRAY,
  },
};
export const Green: Story = {
  args: {
    ...commonArgs,
    variant: BadgeVariant.GREEN,
  },
};
