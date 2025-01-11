import { CartItem } from "@/types";
import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],
  totalPrice: 0,
  shippingInfo: null,
  setShippingInfo: (info: unknown) =>
    set(() => ({
      shippingInfo: info,
    })),

  addToCart: (item: CartItem) =>
    set((state: { items: CartItem[]; totalPrice: number }) => {
      const existingItem = state.items.find(
        (product: { id: string }) => product.id === item.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((product: { id: string; quantity: number }) =>
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

  updateQuantity: (id: string, newQuantity: number) =>
    set((state: { items: CartItem[]; totalPrice: number }) => {
      const itemToUpdate = state.items.find((item) => item.id === id);

      if (!itemToUpdate) return state; // If item not found, return unchanged state

      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );

      const newTotalPrice =
        state.totalPrice -
        itemToUpdate.price * itemToUpdate.quantity +
        itemToUpdate.price * newQuantity;

      return {
        items: updatedItems,
        totalPrice: newTotalPrice,
      };
    }),

  removeItem: (item: CartItem) =>
    set((state: { items: CartItem[]; totalPrice: number }) => {
      const updatedItems = state.items.filter(
        (product: { id: string }) => product.id !== item.id
      );
      return {
        items: updatedItems,
        totalPrice: state.totalPrice - item.price * item.quantity,
      };
    }),

  clearCart: () => set({ items: [], totalPrice: 0 }),
}));
