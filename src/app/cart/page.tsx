"use client";

import { CartItem } from "@/types/stores/CartStoreType";
import OrderButtons from "./_components/OrderButtons";
import UserInformation from "./_components/UserInformation"
import CheckoutForm from "@/components/CheckoutForm";
import { useCartStore } from "@/stores/CartStore";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY || "your-fallback-key"
// );

const Cart = () => {
  const { items } = useCartStore() as { items: CartItem[] };

  // Calculate the total price of cart items
  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  if (items.length === 0) {
    return (
      <main className="container">
        <h1 className="text-3xl lg:text-4xl font-medium italic text-center mb-10">
          Cart
        </h1>
        <p className="text-center text-base md:text-lg">Your cart is empty.</p>
      </main>
    );
  }

  return (
    <main className="container">
      <h1 className="text-3xl lg:text-4xl font-medium italic text-center mb-10">
        Cart
      </h1>
      <div className="flex flex-col justify-between lg:flex-row">
        <OrderButtons />
        <UserInformation />
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-medium mb-4">Order Summary</h2>
        <ul className="text-lg mb-4">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.name}</span>
              <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="text-xl font-bold flex justify-between mb-6">
          <span>Total:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>

        {/* Wrap CheckoutForm in Elements provider */}
        <Elements stripe={stripePromise}>
          <CheckoutForm amount={totalAmount} />
        </Elements>
      </div>
    </main>
  );
};

export default Cart;
