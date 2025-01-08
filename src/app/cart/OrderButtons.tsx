"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/stores/CartStore";

const OrderButtons = () => {
  const { items, totalPrice, removeItem, updateQuantity } = useCartStore();
  const [isRemoving, setIsRemoving] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-row justify-between items-center gap-4">
        {items.length > 0 ? (
          <div className="flex flex-col gap-6">
            {items.map(({ id, name, price, quantity, img }) => (
              <div
                key={id}
                className="flex items-center justify-between border border-[#ffd500] p-4 rounded-md"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={img}
                    alt={name}
                    width={64}
                    height={64}
                    className="rounded-md"
                  />
                  <div>
                    <h4 className="text-lg font-medium">{name}</h4>
                    <p className="text-sm">{price}$</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => updateQuantity(id, quantity - 1)}
                    disabled={quantity === 1}
                    className="bg-[#ffd500] px-2 py-1 rounded-md"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => updateQuantity(id, quantity + 1)}
                    className="bg-[#ffd500] px-2 py-1 rounded-md"
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      removeItem({ id, name, price, quantity, img })
                    }
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right text-lg font-medium">
              Total: {totalPrice.toFixed(2)}$
            </div>
          </div>
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      </div>
    </>
  );
};

export default OrderButtons;
