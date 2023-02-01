import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getCartFromLS } from "../../../utils/getCartFromLS";
import { CartItem, CartSliceState } from "./types";

const { items, totalPrice, totalCount } = getCartFromLS();

const initialState: CartSliceState = {
  items: items,
  totalPrice: totalPrice,
  totalCount: totalCount,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      );
      state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0);
    },
    minusItem(state, action: PayloadAction<String>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      );

      state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0);
    },
    removeItem(state, action: PayloadAction<String>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      );
      state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const { addItem, removeItem, minusItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
