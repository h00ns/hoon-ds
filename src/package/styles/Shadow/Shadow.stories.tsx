import { Meta, StoryObj } from "@storybook/react";
import ShadowComponent from "./Shadow";

const meta: Meta<typeof ShadowComponent> = {
  title: "Styles/Shadow",
  component: ShadowComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      description:
        "box-shadow: {Shadow.MEDIUM} 같은 형태로 호출하여 사용할 수 있습니다.",
      control: "radio",
      options: ["SMALL", "MEDIUM"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "MEDIUM",
  },
};
