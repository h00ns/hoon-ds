import { Meta, StoryObj } from "@storybook/react";
import Pagination from ".";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      description: "현재 페이지입니다.",
    },
    totalPage: {
      description: "전체 페이지입니다.",
    },
    handlePagination: {
      description: "(page: number) => void",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 3,
    totalPage: 10,
    handlePagination: (page: number) => {
      alert(page);
    },
  },
};
