import Image from "next/image";
import PaWord from "../../../../public/Pa Word.png";
import LoginForm from "@/app/(auth)/login/LoginForm";

const login = () => {
  return (
    <main className="container border border-[#fed42d] w-[400px] py-4 rounded-md mx-auto mb-28">
      <Image
        className="mx-auto lg:w-24 mb-2"
        src={PaWord}
        width={80}
        alt="Pa word official in Khmer alphabet"
      />
      <h1 className="text-center mb-8 text-2xl italic font-medium">Login</h1>
      <LoginForm />
    </main>
  );
};

export default login;
