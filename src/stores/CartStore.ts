/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],
  totalPrice: 0,
  shippingInfo: null, // Add this
  setShippingInfo: (info: any) =>
    set(() => ({
      shippingInfo: info,
    })),

  addToCart: (item: { id: any; quantity: number; price: number }) =>
    set((state: { items: any[]; totalPrice: number }) => {
      const existingItem = state.items.find(
        (product: { id: any }) => product.id === item.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((product: { id: any; quantity: any }) =>
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
  clearCart: () => set({ items: [], totalPrice: 0 }),
}));
