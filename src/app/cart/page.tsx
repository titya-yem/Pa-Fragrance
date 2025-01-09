"use client";

import OrderButtons from "./_components/OrderButtons";
import UserInformation from "./_components/UserInformation";
import { useCartStore } from "@/stores/CartStore";

const Cart = () => {
  const { items } = useCartStore();

  if (items.length === 0) {
    return (
      <main className="container">
        <h1 className="text-3xl lg:text-4xl font-medium italic text-center mb-10">
          Cart
        </h1>
        <p className="text-center text-base md:text-lg">Your cart is empty.</p>
      </main>
    );
  } else {
    return (
      <main className="container">
        <h1 className="text-3xl lg:text-4xl font-medium italic text-center mb-10">
          Cart
        </h1>
        <div className="flex flex-col justify-between lg:flex-row">
          <OrderButtons />
          <UserInformation />
        </div>
      </main>
    );
  }
};

export default Cart;
