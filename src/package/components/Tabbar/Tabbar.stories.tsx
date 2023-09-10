import { Meta, StoryObj } from "@storybook/react";
import Tabbar from ".";

const meta: Meta<typeof Tabbar> = {
  title: "Components/Tabbar",
  component: Tabbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    labels: {
      description: `{ label: string, value: string }[] 의 타입을 가지는 Tabbar에 표시될 항목들입니다.`,
    },
    value: {
      description:
        "Tabbar의 value 속성입니다. labels의 value와 일치해야 합니다.",
    },
    handleTabClick: {
      description: "(value: string) => void",
    },
  },
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
