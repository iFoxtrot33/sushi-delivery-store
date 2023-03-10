import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filter from "./slices/filter/slice";
import cart from "./slices/cart/slice";
import sushi from "./slices/sushi/slice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    sushi,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
