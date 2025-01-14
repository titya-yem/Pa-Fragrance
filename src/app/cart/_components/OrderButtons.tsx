"use client";

import Image from "next/image";
import { useCartStore } from "@/stores/CartStore";
import { SquarePlus, SquareMinus } from "lucide-react";
import { CartItem } from "@/types";

const OrderButtons = () => {
  const { items, totalPrice, removeItem, updateQuantity } = useCartStore() as {
    items: CartItem[];
    totalPrice: number;
    removeItem: (item: CartItem) => void;
    updateQuantity: (id: string, quantity: number) => void;
  };

  return (
    <div className="flex flex-col justify-center items-center md:flex-row">
      {items.length > 0 ? (
        <div className="flex flex-col gap-4">
          {items.map(({ id, name, price, quantity, img }: CartItem) => (
            <div
              key={id}
              className="flex items-center justify-between w-[340px] md:w-[500px] border border-[#ffd500] p-2 rounded-md"
            >
              <div className="flex items-center gap-2 md:gap-4">
                <Image
                  src={img}
                  alt={name}
                  className="w-16 md:w-24 rounded-md"
                />
                <div>
                  <h4 className="text-base md:text-lg font-medium">{name}</h4>
                  <p className="text-sm md:text-base">{price}$</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    const newQuantity = quantity - 1;
                    if (newQuantity === 0) {
                      removeItem({ id, name, price, quantity, img });
                    } else {
                      updateQuantity(id, newQuantity);
                    }
                  }}
                  disabled={quantity === 0}
                >
                  <SquareMinus color="#ffd500" size={30} />
                </button>
                <span className="text-base md:text-lg">{quantity}</span>
                <button onClick={() => updateQuantity(id, quantity + 1)}>
                  <SquarePlus color="#ffd500" size={30} />
                </button>
                <button
                  onClick={() => removeItem({ id, name, price, quantity, img })}
                  className="cta-two rounded-md duration-200 hidden md:block"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right text-lg">
            Total:{" "}
            <span className="text-[#ffd500]">{totalPrice.toFixed(2)}$</span>
          </div>
        </div>
      ) : (
        <p className="text-center text-base md:text-lg">Your cart is empty.</p>
      )}
    </div>
  );
};

export default OrderButtons;
