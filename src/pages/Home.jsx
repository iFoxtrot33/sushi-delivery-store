import React from "react";
import axios from "axios";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/SushiBlock/Skeleton";
import SushiBlock from "../components/SushiBlock";

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const fetchedSushi = await axios.get(
        "https://63c1e64a376b9b2e6485d812.mockapi.io/items"
      );
      setItems(fetchedSushi.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">All sushi</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => <SushiBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </>
  );
}

export default Home;
