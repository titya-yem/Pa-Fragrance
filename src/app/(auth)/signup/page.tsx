import Image from "next/image";
import SignupForm from "./SignupForm";
import PaWord from "../../../../public/Pa Word.png";

export default function SignupPage() {
  return (
    <main className="flex flex-col justify-center items-center border border-[#fed42d] w-[400px] py-4 rounded-md mx-auto mb-24">
      <div className="flex justify-center items-center">
        <Image
          src={PaWord}
          width={100}
          alt="Pa word official in Khmer alphabet"
          className="mb-2"
        />
      </div>
      <h1 className="text-center mb-8 text-2xl italic font-medium">Sign Up</h1>
      <section>
        <SignupForm />
      </section>
    </main>
  );
}
