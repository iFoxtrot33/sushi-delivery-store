import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/SushiBlock/Skeleton";
import SushiBlock from "../components/SushiBlock";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { fetchSushi } from "../redux/slices/sushiSlice";

function Home() {
  const isInitialLoad = React.useRef(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );

  const { items, status } = useSelector((state) => state.sushi);

  const { searchValue } = React.useContext(SearchContext);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const sortBy = sort.sortProperty.replace("-", "");
  const order = sort.sortProperty.includes("-") ? "asc" : "desc";
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

  React.useEffect(() => {
    dispatch(fetchSushi({ sortBy, order, category, search, currentPage }));
    if (!isInitialLoad.current) {
      setSearchParams({ currentPage, category, sortBy, searchValue });
    } else {
      setSearchParams({});
      isInitialLoad.current = false;
    }
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const skeletons = [...new Array(12)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const sushi = items.map((obj) => <SushiBlock key={obj.id} {...obj} />);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">All sushi</h2>
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
}

export default Home;
