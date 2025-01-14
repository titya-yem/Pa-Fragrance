import Image from "next/image";
import FounderImg from "../../../public/Founder img.jpg";

const Founder = () => {
  return (
    <section className="bg-black text-white">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium italic text-center py-20">
        History
      </h1>
      <div className="flex flex-col lg:flex-row lg:gap-60 justify-center items-center px-6 pb-20 bg-black">
        <Image
          className="w-1/2 md:max-w-[30%] rounded-md"
          src={FounderImg}
          alt="Mayavin Kith, The founder of Pa Fragrance."
        />
        <div className="text-sm lg:text-base w-full md:*w-2/4 xl:w-1/3 *:leading-6 *:mt-6 md:*:mt-8 text-center *:mx-auto lg:text-left text-[#FAF5FF]">
          <p>
            Introducing &ldquo;ប៉ា&quot; a fragrance that captures the deep bond
            between father and child, inspired by the Khmer-American experience.
            More than just a scent, &quot;ប៉ា&quot; evokes cherished memories of
            love, tradition, and the enduring influence of fathers.
          </p>
          <p>
            Each spritz of &quot;ប៉ា&quot; recalls the comforting scent of a
            father’s cologne and the warmth of family gatherings. It’s a tribute
            to the men who shaped us, embodying their strength, wisdom, and
            unwavering support.
          </p>
          <p>
            Wearing &quot;ប៉ា&quot; is like embracing the past, bringing to life
            moments of laughter, lessons learned, and a father’s gentle love.
            Let &quot;ប៉ា&quot; be part of your daily ritual, a timeless
            reminder of the love and legacy that fathers leave behind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
