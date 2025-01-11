"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "@/components/CheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY || ""
);

const ElementsProvider = ({ amount }: { amount: number }) => (
  <Elements stripe={stripePromise}>
    <div className="flex justify-center">
      <CheckoutForm amount={amount} />
    </div>
  </Elements>
);

export default ElementsProvider;
