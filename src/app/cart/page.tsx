import Image from "next/image";
import premiumFragrance from "../../../public/Pa perfume set.png";
import { CircleMinus, CirclePlus } from "lucide-react";

const cart = () => {
  return (
    <main className="container">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium italic text-center mb-10">
        Cart
      </h1>
      <div className="max-w-lg mx-auto">
        <div className="flex gap-6 items-center justify-center py-2 border border-[#fed42d] rounded-md">
          <Image
            src={premiumFragrance}
            className="w-20 md:w-24 rounded-sm"
            alt="Pa fragrance"
          />
          <div className="flex items-center justify-between gap-2">
            <p className="font-semibold text-base md:text-lg">Pa Premium</p>
            <span className="text-sm md:text-base">99$</span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <button>
              <CircleMinus color="#ffd500" />
            </button>
            <p className="font-semibold md:text-lg">1</p>
            <button>
              <CirclePlus color="#ffd500" />
            </button>
          </div>
          <button className="text-sm md:text-base cta-two rounded-md">
            Remove
          </button>
        </div>
        <button className="w-full bg-[#fed42d] text-black py-2 rounded-md mt-4">
          Checkout
        </button>
      </div>
    </main>
  );
};

export default cart;
