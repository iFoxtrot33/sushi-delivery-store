import React from "react";
import axios from "axios";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/SushiBlock/Skeleton";
import SushiBlock from "../components/SushiBlock";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

function Home() {
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: "rating",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}` : "";
    console.log(order);
    async function fetchData() {
      const fetchedSushi = await axios.get(
        `https://63c1e64a376b9b2e6485d812.mockapi.io/items?page=${currentPage}&limit=12${category}${search}&sortBy=${sortBy}&order=${order}`
      );
      setItems(fetchedSushi.data);
      setIsLoading(false);
    }
    fetchData();
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);
  const skeletons = [...new Array(12)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const sushi = items.map((obj) => <SushiBlock key={obj.id} {...obj} />);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={categoryId}
            onChangeCategory={(i) => setCategoryId(i)}
          />
          <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
        </div>
        <h2 className="content__title">All sushi</h2>
        <div className="content__items">{isLoading ? skeletons : sushi}</div>
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </>
  );
}

export default Home;
