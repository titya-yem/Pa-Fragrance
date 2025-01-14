import Image from "next/image";
import PaFragranceSet from "../../../public/About section.png";

const page = () => {
  return (
    <section>
      <main className="relative pb-28 bg-black">
        <div className="h-24 xl:h-32 bg-rgb rounded-t-lg mx-auto z-[-1]"></div>
        <div className="absolute inset-0 flex justify-center mt-2 lg:mt-6 bg-transparent">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium italic text-center bg-transparent">
            About Us
          </h1>
        </div>
        <Image
          src={PaFragranceSet}
          className="w-screen mx-auto rounded-b-lg z-[-1]"
          alt="Pa Fragrance premium set"
        />
        <div className="absolute inset-0 flex md:mt-10 justify-center lg:*:w-3/4 xl:*:w-3/4 2xl:*:w-3/5 z-[1] p-6 bg-transparent">
          <div className="text-xs md:text-base text-center md:leading-5 mt-4 bg-transparent">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium md:mb-2 lg:mb-6 2xl:mt-4 text-black bg-transparent">
              Experience the essence of memories with our brand new fragrance,
              “ប៉ា”.
            </h1>
            <p className="bg-transparent text-black">
              At our company, we strive to create perfumes that capture the
              essence of memories, allowing you to relive special moments with
              every application.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default page;
