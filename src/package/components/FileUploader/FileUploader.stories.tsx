import { Meta, StoryObj } from "@storybook/react";
import FileUploader from ".";

const meta: Meta<typeof FileUploader> = {
  title: "Components/FileUploader",
  component: FileUploader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    description: {
      description: "파일 업로드 설명",
    },
    accept: {
      description: "파일 업로드 허용 확장자",
    },
    handleFile: {
      description: "(file: File) => void",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: "이곳에 파일을 끌어다 놓거나 클릭하세요.",
    accept: ".jpg, .png, .jpeg",
    handleFile: (file: File) => {},
  },
};
