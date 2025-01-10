"use client";

import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

interface CheckoutFormProps {
  amount: number; // Pass the total amount from your cart
}

const CheckoutForm = ({ amount }: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    try {
      // Create payment intent
      const { data } = await axios.post("/api/cart/payment", {
        amount,
      });
      const clientSecret = data.clientSecret;

      // Confirm payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

      if (result.error) {
        console.error(result.error.message);
        alert(result.error.message);
      } else if (result.paymentIntent?.status === "succeeded") {
        setPaymentSuccess(true);
        alert("Payment Successful!");
      }
    } catch (error) {
      console.error(error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-700 p-4 rounded-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#ffd500]">
          Card Details
        </label>
        <CardElement
          className="border p-2 rounded-sm bg-gray-700"
          options={{
            style: {
              base: {
                color: "#ffffff",
                fontFamily: "Arial, sans-serif",
                fontSize: "16px",
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading || !stripe || paymentSuccess}
        className="bg-[#ffd500] text-black px-4 py-2 rounded-md w-full"
      >
        {isLoading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default CheckoutForm;
