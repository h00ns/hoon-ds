import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { useGetPageArray } from "./hooks";
import Icon from "../Icon";
import { pageItem, pagination } from "./index.css";

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
    <div className={pagination} ref={ref} {...htmlAttributes}>
      <div className={pageItem()} onClick={() => handlePagination(prevPage)}>
        <Icon size={"16px"} name="chevron-left" />
      </div>

      {pageArray.map((page) => (
        <div
          className={pageItem({ isSelect: page === currentPage })}
          key={page}
          onClick={() => handlePagination(page)}
        >
          {page}
        </div>
      ))}

      <div className={pageItem()} onClick={() => handlePagination(nextPage)}>
        <Icon size={"16px"} name="chevron-right" />
      </div>
    </div>
  );
};

/**
 *  @Component Pagination
 *  @props currentPage - 현재 페이지 {number}
 *  @props totalPage - 전체 페이지 {number}
 *  @props handlePagination - 페이지 변경 핸들러 {(page: number) => void)}
 */
export default forwardRef(Pagination);
