"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { Quantity } from "@/lib/Store";

const OrderButtons = () => {
  const { quantity, increment, decrement, remove } = Quantity();
  const [isRemoving, setIsRemoving] = useState<boolean>(false);

  return (
    <div className="flex flex-row justify-between items-center gap-4">
      <button
        onClick={() => {
          if (quantity > 0) decrement(1);
          setIsRemoving(true);
        }}
      >
        <CircleMinus color="#ffd500" />
      </button>
      <p className="font-medium md:text-lg">{quantity}</p>
      <button onClick={() => increment(1)}>
        <CirclePlus color="#ffd500" />
      </button>
      <button
        className="hidden md:block md:text-base cta-two rounded-md"
        onClick={() => remove(1)}
        disabled={isRemoving}
      >
        Remove
      </button>
      <div>
        <p>
          Total <span>{quantity}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderButtons;
