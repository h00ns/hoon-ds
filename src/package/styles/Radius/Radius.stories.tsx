import { Meta, StoryObj } from "@storybook/react";
import RadiusComponent from "./Radius";

const meta: Meta<typeof RadiusComponent> = {
  title: "Styles/Radius",
  component: RadiusComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      description:
        "border-radius: {Radius.MEDIUM} 같은 형태로 호출하여 사용할 수 있습니다.",
      control: "radio",
      options: ["SMALL", "MEDIUM", "LARGE", "XLARGE", "MAXIMUM"],
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
