import { Meta, StoryObj } from "@storybook/react";
import Table from ".";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    labels: {
      description: `{ label: string, value: string }[] 의 타입을 가지는 header에 표시될 항목들입니다.`,
    },
    data: {
      description:
        "Body에 표시될 data들입니다. 객체의 속성이 labels의 value와 일치해야 합니다.",
    },
    gridTemplateColumns: {
      description: "테이블의 컬럼 너비입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gridTemplateColumns: "200px 200px 200px",
    labels: [
      { label: "label1", value: "value1" },
      { label: "label2", value: "value2" },
      { label: "label3", value: "value3" },
    ],
    data: [
      { value1: "value1", value2: "value2", value3: "value3" },
      { value1: "value1", value2: "value2", value3: "value3" },
      { value1: "value1", value2: "value2", value3: "value3" },
    ],
  },
};
