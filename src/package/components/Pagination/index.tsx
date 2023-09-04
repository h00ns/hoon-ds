import styled from "@emotion/styled";
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { useGetPageArray } from "./hooks";
import { gray, primary, white } from "../../styles/Color";
import Icon from "../Icon";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly currentPage: number;
  readonly totalPage: number;
  readonly handlePagination: (page: number) => void;
}

const Pagination = (
  { currentPage, totalPage, handlePagination, ...htmlAttributes }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const prevPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage < totalPage ? currentPage + 1 : totalPage;

  const pageArray = useGetPageArray(currentPage, totalPage);

  return (
    <Component {...htmlAttributes} ref={ref}>
      <IconWrapper onClick={() => handlePagination(prevPage)}>
        <Icon size={"16px"} name="chevron-left" />
      </IconWrapper>

      {pageArray.map((page) => (
        <PageItem
          select={page === currentPage}
          key={page}
          onClick={() => handlePagination(page)}
        >
          {page}
        </PageItem>
      ))}

      <IconWrapper onClick={() => handlePagination(nextPage)}>
        <Icon size={"16px"} name="chevron-right" />
      </IconWrapper>
    </Component>
  );
};

const Component = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;
`;

const PageItem = styled.div<{ select?: boolean }>`
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  color: ${primary.gray};
  border-radius: 8px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ select }) =>
    select
      ? `
    color:${white};
    background:${primary.blue};
    `
      : `
    &:hover {
      background: ${gray.gray1};
    }
  `}
`;

const IconWrapper = styled(PageItem)``;

/**
 *  @Component Pagination
 *  @props currentPage - 현재 페이지 {number}
 *  @props totalPage - 전체 페이지 {number}
 *  @props handlePagination - 페이지 변경 핸들러 {(page: number) => void)}
 */
export default forwardRef(Pagination);
