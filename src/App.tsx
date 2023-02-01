import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
//import Cart from "./pages/Cart";
import Home from "./pages/Home";
//import AboutItem from "./pages/AboutItem";
//import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";

import "./scss/app.scss";

const Cart = React.lazy(
  () => import(/*webpackChunkName: 'Cart'*/ "./pages/Cart")
);
const NotFound = React.lazy(
  () => import(/*webpackChunkName: 'NotFound'*/ "./pages/NotFound")
);
const AboutItem = React.lazy(
  () => import(/*webpackChunkName: 'AboutItem'*/ "./pages/AboutItem")
);
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<div>Cart is loading...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="about/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AboutItem />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
