"use client";

import { FormType } from "@/types/FormType";
import { useForm, SubmitHandler } from "react-hook-form";

const ShippingAddress = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log("Shipping Address", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
            State*
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
            Zip*
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
        className="text-black w-full px-4 py-3 rounded-md bg-[#ffd500] mt-6"
      >
        Pay Now
      </button>
    </form>
  );
};

export default ShippingAddress;
