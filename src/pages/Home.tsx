import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";
import { useSearchParams } from "react-router-dom";
import { setCategoryId, setCurrentPage } from "../redux/slices/filter/slice";

import {
  Categories,
  Sort,
  Skeleton,
  SushiBlock,
  Pagination,
  Banner,
} from "../components";

import { fetchSushi } from "../redux/slices/sushi/asyncActions";
import { selectSushiData } from "../redux/slices/sushi/selectors";
import { selectFilter } from "../redux/slices/filter/selectors";

const Home: React.FC = () => {
  const isInitialLoad = React.useRef(true);
  const [, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);

  const { items, status } = useSelector(selectSushiData);

  const onChangeCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const sortBy = sort.sortProperty.replace("-", "");
  const order = sort.sortProperty.includes("-") ? "asc" : "desc";
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

  React.useEffect(() => {
    dispatch(fetchSushi({ sortBy, order, category, search, currentPage }));
    if (!isInitialLoad.current) {
      setSearchParams(
        new URLSearchParams({
          currentPage: currentPage.toString(),
          category: category,
          sortBy: sortBy,
          searchValue: searchValue,
        })
      );
    } else {
      setSearchParams({});
      isInitialLoad.current = false;
    }
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const skeletons = [...new Array(12)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const sushi = items.map((obj: any) => <SushiBlock key={obj.id} {...obj} />);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort value={sort} />
        </div>
        <Banner />
        {status === "error" ? (
          <div className="content__error-info">
            <h3>Error😕</h3>
            <p>Try to reload the page</p>
          </div>
        ) : (
          <div className="content__items">
            {status === "loading" ? skeletons : sushi}
          </div>
        )}
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  );
};

export default Home;
