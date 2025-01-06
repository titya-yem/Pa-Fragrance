"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import { SignupFormData } from "@/types";
import { useState } from "react";

const SignupForm = () => {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { register, handleSubmit } = useForm<SignupFormData>();

  const onSignup = async (data: SignupFormData) => {
    try {
      await axios.post("api/auth/signup", data);
      router.push("/login");
      setButtonDisabled(true);
    } catch (error) {
      setButtonDisabled(false);
      console.log("Sign Up failed", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSignup)}
        className="flex flex-col justify-between items-center gap-4 *:flex *:items-center *:gap-4"
      >
        <div>
          <label htmlFor="username" className="text-lg mr-7">
            Name
          </label>
          <input
            type="text"
            id="username"
            placeholder="Name"
            required
            className="bg-[#fed42d] rounded-sm text-black w-56 px-2 py-3 ml-2 focus:outline-none placeholder:text-black"
            {...register("name", { required: "Name is required" })}
          />
        </div>
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
          type="submit"
          disabled={buttonDisabled}
          className="cta-two rounded-sm duration-200 w-full mt-4 text-center flex items-center justify-center py-2"
        >
          {buttonDisabled ? "Sign Up" : "Please fill in to Sign Up"}
        </button>
      </form>
    </>
  );
};

export default SignupForm;
