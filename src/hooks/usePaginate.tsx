import React from "react";

const usePagination = (defaultValue: number) => {
  const [pageNum, setPageNum] = React.useState(defaultValue);

  const nextPage = () => {
    setPageNum((prev) => prev + 1);
  };

  const prevPage = () => {
    setPageNum((prev) => prev - 1);
  };

  const goToPageNumber = (pageNumber: number) => {
    setPageNum(pageNumber);
  };

  return { pageNum, nextPage, prevPage, goToPageNumber };
};

export default usePagination;
