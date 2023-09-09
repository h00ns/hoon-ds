import { Meta, StoryObj } from "@storybook/react";
import Tabbar from ".";

const meta: Meta<typeof Tabbar> = {
  title: "Components/Tabbar",
  component: Tabbar,
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
      { label: "tab1", value: "tab1" },
      { label: "tab2", value: "tab2" },
      { label: "tab3", value: "tab3" },
    ],
    value: "tab2",
    handleTabClick: (value: string) => alert(value),
  },
};
