import { CartItem } from "@/types";
import { create } from "zustand";

// Define the shape of the store's state
interface CartState {
  items: CartItem[];
  totalPrice: number;
  shippingInfo: unknown;
  setShippingInfo: (info: unknown) => void;
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  removeItem: (item: CartItem) => void;
  clearCart: () => void;
}

// Create the Zustand store with typed state
export const useCartStore = create<CartState>((set) => ({
  items: [],
  totalPrice: 0,
  shippingInfo: null,
  setShippingInfo: (info) =>
    set(() => ({
      shippingInfo: info,
    })),

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.items.find(
        (product) => product.id === item.id
      );

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

  updateQuantity: (id, newQuantity) =>
    set((state) => {
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

  removeItem: (item) =>
    set((state) => {
      const updatedItems = state.items.filter(
        (product) => product.id !== item.id
      );
      return {
        items: updatedItems,
        totalPrice: state.totalPrice - item.price * item.quantity,
      };
    }),

  clearCart: () => set({ items: [], totalPrice: 0 }),
}));
