import { create } from "zustand";

interface Quantity {
  quantity: number;
  increment: (order: number) => void;
  decrement: (order: number) => void;
  remove: (order: number) => void;
}

export const Quantity = create<Quantity>((set) => ({
  quantity: 0,
  increment: (order) =>
    set((state: Quantity) => ({ quantity: state.quantity + order })),

  decrement: (order) =>
    set((state: Quantity) => ({ quantity: state.quantity - order })),

  remove: (order) => set((state: Quantity) => ({ quantity: 0 })),
}));
