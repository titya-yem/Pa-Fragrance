"use client";

import { CardPaymentFormData } from "@/types";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import paWord from "../../../../public/Pa Word.png";
import cardLogo from "../../../../public/Card Logo.jpg";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const CardPayment: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CardPaymentFormData>();

  const onSubmit: SubmitHandler<CardPaymentFormData> = async (data) => {
    try {
      console.log(data);
      await axios.post("/api/cart/payment", data);
      toast.success("Payment successful, You will receive an email shortly.");
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Payment failed, Please try again.");
    }
  };

  return (
    <main className="container items-center h-[620px]">
      <div className="relative max-w-sm h-[540px] mx-auto bg-gray-700 p-6 rounded-md">
        <h2 className="text-xl text-center font-bold h-20 mb-4 bg-gray-700">
          Payment
        </h2>
        <Image
          src={paWord}
          alt="Dad in Khmer alphabet"
          width={100}
          height={100}
          className="absolute top-2 left-0 bg-transparent"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 bg-gray-700"
        >
          <div>
            {/* Card Number */}
            <div>
              <div className="flex justify-between items-center gap-2 bg-gray-700">
                <label
                  htmlFor="cartNumber"
                  className="block text-sm font-medium text-[#ffd500] bg-gray-700 pt-2 pl-2 pb-1"
                >
                  Card Number
                </label>
                <Image
                  src={cardLogo}
                  alt="Card Logo"
                  width={90}
                  height={90}
                  className="rounded-sm mb-1"
                />
              </div>
              <input
                type="text"
                id="cartNumber"
                placeholder="1234 5678 9012 3456"
                className={`w-full px-3 py-2 border rounded-sm bg-gray-700 text-white focus:outline-none ${
                  errors.cardNumber ? "border-red-500" : "border-gray-300"
                }`}
                {...register("cardNumber", {
                  required: "Card number is required",
                })}
              />
            </div>

            {/* Name on Card */}
            <div>
              <label
                htmlFor="nameOnCard"
                className="block text-sm font-medium text-[#ffd500] bg-gray-700 pt-2 pl-2 pb-1"
              >
                Name on Card
              </label>
              <input
                type="text"
                id="nameOnCard"
                placeholder="John Doe"
                className={`w-full px-3 py-2 border rounded-sm bg-gray-700 text-white focus:outline-none ${
                  errors.nameOnCard ? "border-red-500" : "border-gray-300"
                }`}
                {...register("nameOnCard", {
                  required: "Name on card is required",
                })}
              />
            </div>

            {/* Expiry Date */}
            <div>
              <label
                htmlFor="expiryDate"
                className="block text-sm font-medium text-[#ffd500] bg-gray-700 pt-2 pl-2 pb-1"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                placeholder="MM/YY"
                className={`w-full px-3 py-2 border rounded-sm bg-gray-700 text-white focus:outline-none ${
                  errors.expiryDate ? "border-red-500" : "border-gray-300"
                }`}
                {...register("expiryDate", {
                  required: "Expiry date is required",
                })}
              />
            </div>

            {/* Security Code */}
            <div>
              <label
                htmlFor="securityCode"
                className="block text-sm font-medium text-[#ffd500] bg-gray-700 pt-2 pl-2 pb-1"
              >
                Security Code
              </label>
              <input
                type="text"
                id="securityCode"
                placeholder="123"
                className={`w-full px-3 py-2 border rounded-sm bg-gray-700 text-white focus:outline-none ${
                  errors.securityCode ? "border-red-500" : "border-gray-300"
                }`}
                {...register("securityCode", {
                  required: "Security code is required",
                })}
              />
            </div>
          </div>

          {/* Submit Payment */}
          <button
            type="submit"
            className="w-full cta-two py-2 px-4 rounded-s bg-gray-700"
          >
            Pay Now
          </button>
        </form>
      </div>
    </main>
  );
};

export default CardPayment;
