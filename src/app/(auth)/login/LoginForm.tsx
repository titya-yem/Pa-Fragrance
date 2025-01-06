"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { LoginFormData } from "@/types";

// This page is copy from ChatGPT

const LoginForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginFormData>();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onLogin = async (data: LoginFormData) => {
    setButtonDisabled(true);
    setErrorMessage("");

    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (response?.error) {
      setErrorMessage(response.error);
      setButtonDisabled(false);
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onLogin)}
        className="flex flex-col justify-between items-center gap-4 *:flex *:items-center *:gap-4"
      >
        <div>
          <label htmlFor="email" className="text-lg mr-8">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            className="bg-[#fed42d] rounded-sm text-black w-56 px-2 py-3 ml-2 focus:outline-none placeholder:text-black"
            {...register("email", { required: "Email is required" })}
          />
        </div>
        <div>
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            className="bg-[#fed42d] rounded-sm text-black w-56 px-2 py-3 ml-2 focus:outline-none placeholder:text-black"
            {...register("password", { required: "Password is required" })}
          />
        </div>
        {errorMessage && (
          <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
        )}
        <button
          disabled={buttonDisabled}
          type="submit"
          className="cta-two rounded-sm duration-200 w-11/12 mt-4 text-center flex items-center justify-center py-2"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
