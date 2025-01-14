import Image from "next/image";
import PaWord from "../../../public/Pa Word.png";
import LimitedPaper from "../../../public/Limited paper.png";

const Product = () => {
  return (
    <div className="bg-black text-white">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium italic text-center">
        Product
      </h1>
      <section className="container flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="ml-8">
          <div className="font-medium italic">
            <Image
              className="mx-auto lg:w-60"
              src={PaWord}
              width={200}
              alt="Pa word official in Khmer alphabet"
            />
            <h3 className="text-white text-2xl lg:text-3xl xl:text-4xl">
              Introducing our Perfume: A Fragrance That Evokes Memories of
              father
            </h3>
          </div>
          <p className="text-sm lg:text-base mt-4">
            Experience the essence of memories with our unique perfume “ប៉ា”
            inspired by Khmer-American heritage.
          </p>
        </div>
        <div>
          <Image
            className="mx-auto md:mr-20 w-1/2 md:w-3/5 mb-10"
            src={LimitedPaper}
            alt="Paper of limited product of Pa Fragrance only"
          />
        </div>
      </section>
    </div>
  );
};

export default Product;
