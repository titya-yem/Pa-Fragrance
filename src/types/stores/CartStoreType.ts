import { StaticImageData } from "next/image";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: StaticImageData;
};

export interface CartState {
  items: CartItem[];
  totalPrice: number;
  addToCart: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}
