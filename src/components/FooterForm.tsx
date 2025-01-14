"use client";

import { ContactFormData } from "@/types";
import axios from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const FooterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { register, handleSubmit, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post("/api/question", data);
      setIsLoading(true);
      reset();
    } catch (error) {
      console.error("Error submitting question:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto w-4/5 md:w-3/5">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium italic text-center mb-10">
        Contact
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 text-sm lg:text-base sm:w-3/5 lg:w-[70%] sm:mx-auto"
        ref={formRef}
      >
        <input
          className="p-6 rounded-md text-black bg-white"
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />

        <textarea
          className="p-3 rounded-md text-black bg-white md:max-h-36"
          placeholder="Message Us"
          {...register("message", { required: "Message is required" })}
        ></textarea>

        <button
          className="cta-two rounded-md duration-200"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? "Message Sent" : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
