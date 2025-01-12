import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { CartItem } from "@/types";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-12-18.acacia",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { items } = req.body; // Products sent from frontend
      const success_url = `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`;
      const cancel_url = `${req.headers.origin}/cart`;

      // Transform items for Stripe
      const line_items = items.map((item: CartItem) => ({
        price_data: {
          currency: "usd", // Adjust to your currency
          product_data: {
            name: item.name,
            images: [item.img], // Optional
          },
          unit_amount: item.price * 100, // Stripe expects amount in cents
        },
        quantity: item.quantity,
      }));

      // Create a Stripe Checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items,
        success_url,
        cancel_url,
      });

      res.status(200).json({ id: session.id });
    } catch (error) {
      console.error("Stripe Checkout Error:", error);
      res
        .status(500)
        .json({ error: "Failed to create Stripe Checkout session" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
