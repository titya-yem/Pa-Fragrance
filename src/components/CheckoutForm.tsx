"use client";

import { useCartStore } from "@/stores/CartStore";
import { useState } from "react";
import axios from "axios";
import { CartItem } from "@/types";

interface CheckoutFormProps {
  amount: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = () => {
  const { items } = useCartStore() as { items: CartItem[] };
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // Send items to API route
      const { data } = await axios.post("/api/cart/payment", { items });
      // Redirect to Stripe Checkout
      window.location.href = `https://checkout.stripe.com/pay/${data.id}`;
    } catch (error) {
      console.error("Checkout error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="cta-two rounded-md"
    >
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
};

export default CheckoutForm;
