import { Meta, StoryObj } from "@storybook/react";
import Dropdown from ".";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    labels: {
      description: `{ label: string, value: string }[] 의 타입을 가지는 Dropdown에 표시될 항목들입니다.`,
    },
    name: {
      description: "드롭다운의 name 속성입니다.",
    },
    value: {
      description:
        "드롭다운의 value 속성입니다. labels의 value와 일치해야 합니다.",
    },
    placeholder: {
      description:
        "드롭다운의 placeholder 속성입니다. 일치하는 value가 없으면 표시됩니다.",
    },
    onClick: {
      description: "(value: string, name?: string) => void",
    },
  },
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
    handleLabelClick: (value: string, name?: string) =>
      alert(`value: ${value}, name: ${name}`),
  },
};
