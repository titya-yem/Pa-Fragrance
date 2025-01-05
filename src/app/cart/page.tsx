import Image from "next/image";
import premiumFragrance from "../../../public/Pa perfume set.png";
import { CircleMinus, CirclePlus } from "lucide-react";

const cart = () => {
  return (
    <main className="container">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium italic text-center mb-10">
        Cart
      </h1>
      <div className="w-80 max-w-lg mx-auto">
        <div className="flex gap-6 items-center w-full h-20 border border-[#fed42d] rounded-md">
          <Image
            src={premiumFragrance}
            className="w-20 rounded-sm ml-2"
            alt="Pa fragrance"
          />
          <div>
            <p className="font-semibold text-base md:text-lg">Pa Premium</p>
            <p className="text-sm md:text-base">99$</p>
          </div>
          <div className="flex justify-between items-center gap-4">
            <CircleMinus color="#ffd500" />
            <p className="font-semibold">1</p>
            <CirclePlus color="#ffd500" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default cart;
