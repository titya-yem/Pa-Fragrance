"use client";

import { FormType } from "@/types/FormType";
// import axios from "axios";
import { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const ShippingAddress = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    try {
      const userId = localStorage.getItem("userId");
      console.log(userId, data);
      // await axios.post("/api/cart", { ...data, userId });
      setIsLoading(true);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      ref={formRef}
      className="max-w-md mx-auto bg-gray-700"
    >
      {/* First Name and Last Name */}
      <div className="grid grid-cols-2 gap-4 bg-gray-700">
        <div className="bg-gray-700">
          <label className="block text-sm mb-1 font-medium text-[#ffd500] bg-gray-700">
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

        <div className="bg-gray-700">
          <label className="block text-sm mb-1 font-medium text-[#ffd500] bg-gray-700">
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

      {/* Address Line 1 */}
      <div className="mt-4 bg-gray-700">
        <label className="block text-sm mb-1 font-medium text-[#ffd500] bg-gray-700">
          Address Line 1*
        </label>
        <input
          type="text"
          placeholder="Full Address"
          {...register("address1", {
            required: "Address Line 1 is required",
          })}
          className={`w-full border p-2 rounded-sm bg-gray-700 ${
            errors.address1 ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.address1 && (
          <p className="text-red-500 text-sm">{errors.address1.message}</p>
        )}
      </div>

      {/* Address Line 2 */}
      <div className="mt-4 bg-gray-700">
        <label className="block text-sm mb-1 font-medium text-[#ffd500] bg-gray-700">
          Address Line 2
        </label>
        <input
          type="text"
          placeholder="Full Address"
          {...register("address2")}
          className="w-full border p-2 rounded-sm border-gray-300 bg-gray-700"
        />
      </div>

      {/* Country, City, State, Zip */}
      <div className="grid grid-cols-2 gap-4 mt-4 bg-gray-700">
        <div className="bg-gray-700">
          <label className="block text-sm mb-1 font-medium text-[#ffd500] bg-gray-700">
            Country*
          </label>
          <select
            {...register("country", { required: "Country is required" })}
            className={`w-full border p-2 rounded-sm hover:bg-[#ffd500] hover:text-black duration-200 bg-gray-700 ${
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

        <div className="bg-gray-700">
          <label className="block text-sm mb-1 font-medium text-[#ffd500] bg-gray-700">
            City Or Town*
          </label>
          <input
            type="text"
            {...register("city", { required: "City or Town is required" })}
            className={`w-full border p-2 rounded-sm bg-gray-700 ${
              errors.city ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>
      </div>

      {/* State and Zip */}
      <div className="grid grid-cols-2 gap-4 mt-4 bg-gray-700">
        <div className="bg-gray-700">
          <label className="block text-sm mb-1 font-medium text-[#ffd500] bg-gray-700">
            State or Province*
          </label>
          <input
            type="text"
            {...register("state", {
              required: "State or Province is required",
            })}
            className={`w-full border p-2 rounded-sm bg-gray-700 ${
              errors.state ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.state && (
            <p className="text-red-500 text-sm">{errors.state.message}</p>
          )}
        </div>

        <div className="bg-gray-700">
          <label className="block text-sm mb-1 font-medium text-[#ffd500] bg-gray-700">
            Zip Code*
          </label>
          <input
            type="text"
            {...register("zip", { required: "Zip is required" })}
            className={`w-full border p-2 rounded-sm bg-gray-700 ${
              errors.zip ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.zip && (
            <p className="text-red-500 text-sm">{errors.zip.message}</p>
          )}
        </div>
      </div>

      {/* Phone Number */}
      <div className="mt-4 bg-gray-700">
        <label className="block text-sm mb-1 font-medium text-[#ffd500] bg-gray-700">
          Phone Number*
        </label>
        <input
          type="text"
          placeholder="In case we need to contact you."
          {...register("phoneNumber", { required: "Phone Number is required" })}
          className={`w-full border p-2 rounded-sm bg-gray-700 ${
            errors.phoneNumber ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>

      {/* Pay Now */}
      <button
        type="submit"
        disabled={isLoading}
        className="text-black w-full px-4 py-3 rounded-md bg-[#ffd500] mt-6"
      >
        Pay Now
      </button>
    </form>
  );
};

export default ShippingAddress;
