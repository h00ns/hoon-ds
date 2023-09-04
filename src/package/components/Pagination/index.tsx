import styled from "@emotion/styled";
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { useGetPageArray } from "./hooks";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly currentPage: number;
  readonly totalPage: number;
}

const Pagination = (
  { currentPage, totalPage, ...htmlAttributes }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const pageArray = useGetPageArray(currentPage, totalPage);

  return <Component {...htmlAttributes} ref={ref}></Component>;
};

const Component = styled.div`
  display: flex;
  align-items: center;
`;

export default forwardRef(Pagination);
