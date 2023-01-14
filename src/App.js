import React from "react";
import axios from "axios";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import SushiBlock from "./components/SushiBlock";
import "./scss/app.scss";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const fetchedSushi = await axios.get(
        "https://63c1e64a376b9b2e6485d812.mockapi.io/items"
      );
      setItems(fetchedSushi.data);
    }
    fetchData();
    console.log(items);
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">All sushi</h2>
            <div className="content__items">
              {items.map((obj) => (
                <SushiBlock key={obj.id} {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
