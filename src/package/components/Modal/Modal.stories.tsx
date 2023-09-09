import { Meta, StoryObj } from "@storybook/react";
import Modal from ".";
import Button from "../Button";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    openModal: {
      description: "모달의 열림 여부입니다.",
    },
    title: {
      description: "상단에 표시될 모달의 제목입니다.",
    },
    contents: {
      description: "모달의 내용입니다.",
    },
    footer: {
      description: "모달의 하단에 표시될 내용입니다.",
    },
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
