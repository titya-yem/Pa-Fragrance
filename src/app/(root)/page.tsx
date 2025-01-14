import Link from "next/link";
import SplineBox from "@/components/root/SpineBox";
import Footer from "@/components/root/Footer";
import AboutUs from "@/components/root/AboutUs";
import Product from "@/components/root/Product";
import Founder from "@/components/root/Founder";

export default function Home() {
  return (
    <>
      <main className="container md:flex justify-between bg-black">
        <div className="md:w-2/4 lg:w-[52%] md:mt-20 container text-center md:text-left">
          <h3 className="text-white font-bold italic text-2xl lg:text-4xl xl:text-5xl">
            Experience the Essence of Memories with &quot;ប៉ា&quot; Perfume.
          </h3>
          <p className="text-sm lg:text-base mt-4 mb-8 2xl:mb-14">
            Introducing &ldquo;ប៉ា&rdquo; Perfume, a fragrance that captures the
            essence of memories. With every spritz, be transported to cherished
            moments and feel the presence of your loved ones. Embrace the power
            of scent and create lasting memories with “ប៉ា” Perfume.
          </p>
          <Link
            href="/shop"
            className="cta px-24 md:px-20 lg:px-28 xl:px-40 py-4 lg:py-5 lg:text-lg duration-200"
          >
            Shop now
          </Link>
        </div>
        <div className="lg:w-[45%] h-[620px]">
          <SplineBox />
        </div>
      </main>

      <section>
        <AboutUs />
        <Product />
        <Founder />
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
