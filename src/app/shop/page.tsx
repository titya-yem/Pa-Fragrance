"use client";

import Image from "next/image";
import data from "@/contexts/data";
import { dataType } from "@/types";
import { CartItem } from "@/types/stores/CartStoreType";
import { useCartStore } from "@/stores/CartStore";

const shop = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks, @typescript-eslint/no-explicit-any
  const addToCart = useCartStore((state: any) => state.addToCart);

  const handleAddToCart = (product: CartItem) => {
    addToCart(product); // Directly call the addToCart function
  };

  return (
    <main className="container bg-black">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium italic text-center mb-10">
        Our Products
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap gap-6 mb-20">
        {data.map(({ id, img, name, price, infoBrand, infoText }: dataType) => (
          <div
            key={id}
            className="border border-[#ffd500] p-2 rounded-md w-80 mx-auto flex flex-col"
          >
            <Image
              className="rounded-sm"
              src={img}
              width={300}
              height={300}
              alt="Pa Fragrance"
            />
            <div className="flex flex-col gap-3 mt-4 flex-grow">
              <h4 className="text-lg md:text-xl font-medium">
                {name}
                <span className="price text-sm md:text-base float-right">
                  {price}$
                </span>
              </h4>
              <p className="text-sm md:text-base w-4/5">
                <span className="font-medium">{infoBrand}</span> {infoText}
              </p>
              <button
                onClick={() =>
                  handleAddToCart({
                    id: id.toString(),
                    name,
                    price,
                    quantity: 1,
                    img,
                  })
                }
                className="cta-two rounded-sm duration-200 mt-auto"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default shop;
