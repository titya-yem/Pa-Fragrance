"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import SplineBox from "@/components/root/SpineBox";
import Footer from "@/components/root/Footer";
import AboutUs from "@/components/root/AboutUs";
import Product from "@/components/root/Product";
import Founder from "@/components/root/Founder";

// Dynamically import CheckoutWrapper
const CheckoutWrapper = dynamic(() => import("@/components/ElementsProvider"), {
  ssr: false, // Disable server-side rendering for this component
});

export default function Home() {
  const totalAmount = 100; // Example total amount; replace with dynamic value as needed

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

      {/* Optional: Add a payment section if needed on the home page */}
      <section className="container mt-10">
        <h2 className="text-white text-2xl font-bold text-center mb-6">
          Make a Payment
        </h2>
        <CheckoutWrapper amount={totalAmount} />
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
