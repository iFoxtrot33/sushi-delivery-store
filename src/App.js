import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Sort from "./Components/Sort";
import SushiBlock from "./Components/SushiBlock";
import "./scss/app.scss";

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
              <SushiBlock />
              <SushiBlock />
              <SushiBlock />
              <SushiBlock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
