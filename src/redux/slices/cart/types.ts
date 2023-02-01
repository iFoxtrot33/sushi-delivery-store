export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  count: number;
};

export interface CartSliceState {
  items: CartItem[];
  totalPrice: number;
  totalCount: number;
}
