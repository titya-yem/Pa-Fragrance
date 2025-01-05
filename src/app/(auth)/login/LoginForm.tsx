"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import { LoginFormData } from "@/types";

const LoginForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginFormData>();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onLogin = async (data: LoginFormData) => {
    try {
      await axios.post("/api/login", data);
      setButtonDisabled(true);
      router.push("/");
    } catch (error) {
      setButtonDisabled(false);
      console.log("Login failed", error);
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
        <button
          disabled={buttonDisabled}
          type="submit"
          className="cta-two rounded-sm duration-200 w-11/12 mt-6 text-center flex items-center justify-center py-2"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
