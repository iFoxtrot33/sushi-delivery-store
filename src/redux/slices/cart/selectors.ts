import { RootState } from "../../store";

export const selectCart = (state: RootState) => state.cart;

export const selectCartItemByIdFull = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);

export const selectCartItemByIdHalf = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === "-" + id);
