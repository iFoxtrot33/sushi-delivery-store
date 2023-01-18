import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/SushiBlock/Skeleton";
import SushiBlock from "../components/SushiBlock";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

function Home() {
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  React.useEffect(() => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    async function fetchData() {
      const fetchedSushi = await axios.get(
        `https://63c1e64a376b9b2e6485d812.mockapi.io/items?page=${currentPage}&limit=12&${category}&sortBy=${sortBy}&order=${order}${search}`
      );
      setItems(fetchedSushi.data);
      setIsLoading(false);
    }
    fetchData();
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
        <div className="content__items">{isLoading ? skeletons : sushi}</div>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  );
}

export default Home;
