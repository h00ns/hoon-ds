import { Meta, StoryObj } from "@storybook/react";
import FileUploader from ".";

const meta: Meta<typeof FileUploader> = {
  title: "FileUploader",
  component: FileUploader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
