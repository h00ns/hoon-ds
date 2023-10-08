import { Meta, StoryObj } from "@storybook/react";
import SearchInput from ".";

const meta: Meta<typeof SearchInput> = {
  title: "Components/SearchInput",
  component: SearchInput,
  // parameters: {
  //   layout: "centered",
  // },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
