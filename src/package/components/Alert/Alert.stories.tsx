import { Meta, StoryObj } from "@storybook/react";
import Alert from ".";
import { AlertVariant } from "./constants";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Alert 스타일 {AlertVariantType}",
      control: "radio",
      options: Object.values(AlertVariant),
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: AlertVariant.PRIMARY,
    children: "Alert Component Children",
  },
};
