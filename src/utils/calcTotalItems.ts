import { CartItem } from "../redux/slices/cart/types";

export const calcTotalItems = (items: CartItem[]) => {
  return items.reduce((sum, item) => sum + item.count, 0);
};
