import Image from "next/image";
import Link from "next/link";
import premiumFragrance from "../../../public/Pa perfume set.png";
import OrderButtons from "./OrderButtons";

const cart = () => {
  return (
    <main className="container">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium italic text-center mb-10">
        Cart
      </h1>
      <div className="flex flex-col max-w-lg mx-auto">
        <div className="flex gap-4 items-center justify-center py-2 border border-[#fed42d] rounded-md">
          <Image
            src={premiumFragrance}
            className="w-20 md:w-24 rounded-sm"
            alt="Pa fragrance"
          />
          <div className="flex items-center justify-between gap-2">
            <p className="font-semibold text-base md:text-lg ">Pa Premium</p>
            <span className="text-sm md:text-base text-[#fed42d]">99$</span>
          </div>
          <OrderButtons />
        </div>
        <Link
          href="/checkout"
          className="w-full font-medium text-center bg-[#fed42d] text-black py-2 md:py-4 rounded-md mt-4"
        >
          Checkout
        </Link>
      </div>
    </main>
  );
};

export default cart;
