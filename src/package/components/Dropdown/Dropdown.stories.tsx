import { Meta, StoryObj } from "@storybook/react";
import Dropdown from ".";

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labels: [
      { label: "option1", value: "option1" },
      { label: "option2", value: "option2" },
      { label: "option3", value: "option3" },
    ],
    name: "name",
    value: "option1",
    placeholder: "placeholder",
    onClick: () => {},
  },
};
