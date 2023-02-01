import { calcTotalPrice } from "./calcTotalPrice";
import { calcTotalItems } from "./calcTotalItems";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);
  const totalCount = calcTotalItems(items);

  return {
    items,
    totalPrice,
    totalCount,
  };
};
