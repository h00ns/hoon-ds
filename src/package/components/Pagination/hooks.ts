//  return to pagination page array
export const useGetPageArray = (currentPage: number, totalPage: number) => {
  const result: number[] = [];

  const addPageRange = (start: number, end: number) => {
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
  };

  if (totalPage <= 5) {
    addPageRange(1, totalPage);
  } else {
    if (currentPage <= 3) {
      addPageRange(1, 5);
    } else if (currentPage > totalPage - 3) {
      addPageRange(totalPage - 4, totalPage);
    } else {
      addPageRange(currentPage - 2, currentPage + 2);
    }
  }

  return result;
};
