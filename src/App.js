import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import SushiBlock from "./components/SushiBlock";
import "./scss/app.scss";

import items from "./assets/items.json";

function App() {
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
