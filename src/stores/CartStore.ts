import { CartState } from "@/types/Store/CartStoreType";
import { create } from "zustand";

export const useCartStore = create<CartState>((set) => ({
  items: [],
  totalPrice: 0,
  addToCart: (item) =>
    set((state) => {
      // check if products exits in cart
      const existingItem = state.items.find(
        (product) => product.id === item.id
      );

      // if product exists, add more by 1
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((product) =>
            product.id === item.id
              ? { ...product, quantity: product.quantity + item.quantity }
              : product
          ),
          totalPrice: state.totalPrice + item.price * item.quantity,
        };
      }
      return {
        ...state,
        items: [...state.items, item],
        totalPrice: state.totalPrice + item.price * item.quantity,
      };
    }),

  // remove product from cart by id
  removeItem: (item) =>
    set((state) => ({
      items: state.items.filter((product) => product.id !== item.id),
      totalPrice: state.totalPrice - item.price * item.quantity,
    })),

  // update quantity of product by id and quantity
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
      totalPrice: state.items.reduce(
        (total, item) =>
          total + item.price * (item.id === id ? quantity : item.quantity),
        0
      ),
    })),

  // clear cart
  clearCart: () => set({ items: [], totalPrice: 0 }),
}));
