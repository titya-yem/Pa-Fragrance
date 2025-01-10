"use client";

import { FormType } from "@/types/FormType";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

const ShippingAddress = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();
  const router = useRouter();

  // Extract userId from token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken: { id: string; email: string; name: string } =
          jwtDecode(token);
        setUserId(decodedToken.id);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []);

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    setIsLoading(true);
    try {
      if (!userId) {
        toast.error("User not authenticated. Please log in.");
        return;
      }
      const payload = {
        ...data,
        userId,
        email: data.email,
        zipCode: data.zip,
        phone: data.phoneNumber,
      };
      await axios.post("/api/cart", payload);
      toast.success("Shipping Address Created Successfully");
      formRef.current?.reset(); // Reset the form
      router.push("/cart/payment");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to create shipping address. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      ref={formRef}
      className="max-w-md mx-auto bg-gray-700 p-6 rounded-md shadow-md"
    >
      {/* First Name and Last Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1 font-medium text-[#ffd500]">
            First Name*
          </label>
          <input
            type="text"
            {...register("firstName", { required: "First Name is required" })}
            className={`w-full border p-2 rounded-sm bg-gray-700 ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1 font-medium text-[#ffd500]">
            Last Name*
          </label>
          <input
            type="text"
            {...register("lastName", { required: "Last Name is required" })}
            className={`w-full border p-2 rounded-sm bg-gray-700 ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="mt-4">
        <label className="block text-sm mb-1 font-medium text-[#ffd500]">
          Email Address*
        </label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className={`w-full border p-2 rounded-sm bg-gray-700 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Address Line 1 */}
      <div className="mt-4">
        <label className="block text-sm mb-1 font-medium text-[#ffd500]">
          Address Line 1*
        </label>
        <input
          type="text"
          {...register("address1", { required: "Address Line 1 is required" })}
          className={`w-full border p-2 rounded-sm bg-gray-700 ${
            errors.address1 ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.address1 && (
          <p className="text-red-500 text-sm">{errors.address1.message}</p>
        )}
      </div>

      {/* Country, City, State */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <label className="block text-sm mb-1 font-medium text-[#ffd500]">
            Country*
          </label>
          <select
            {...register("country", { required: "Country is required" })}
            className={`w-full border p-2 rounded-sm bg-gray-700 ${
              errors.country ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Cambodia">Cambodia</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1 font-medium text-[#ffd500]">
            City*
          </label>
          <input
            type="text"
            {...register("city", { required: "City is required" })}
            className={`w-full border p-2 rounded-sm bg-gray-700 ${
              errors.city ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1 font-medium text-[#ffd500]">
            State*
          </label>
          <input
            type="text"
            {...register("state", { required: "State is required" })}
            className={`w-full border p-2 rounded-sm bg-gray-700 ${
              errors.state ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.state && (
            <p className="text-red-500 text-sm">{errors.state.message}</p>
          )}
        </div>
      </div>

      {/* Phone Number */}
      <div className="mt-4">
        <label className="block text-sm mb-1 font-medium text-[#ffd500]">
          Phone Number*
        </label>
        <input
          type="text"
          {...register("phoneNumber", { required: "Phone Number is required" })}
          className={`w-full border p-2 rounded-sm bg-gray-700 ${
            errors.phoneNumber ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#ffd500] text-black px-4 py-3 rounded-md mt-6"
      >
        {isLoading ? "Processing..." : "Save and Continue"}
      </button>
    </form>
  );
};

export default ShippingAddress;
