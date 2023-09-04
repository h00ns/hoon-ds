import { Meta, StoryObj } from "@storybook/react";
import Modal from ".";
import Button from "../Button";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    openModal: true,
    title: "Modal",
    contents: <div>Modal Content</div>,
    footer: (
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button text="Button" />
      </div>
    ),
  },
};
