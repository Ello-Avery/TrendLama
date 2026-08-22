import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentFormInputs, paymentFormSchema } from "@/types";
import { ArrowRight, ShoppingCartIcon } from "lucide-react";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PaymentForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const router = useRouter();

  const handlePaymentFormSubmit: SubmitHandler<PaymentFormInputs> = (
    data,
  ) => {};

  return (
    <div className="">
      <h2 className="font-medium mb-4">Payment Method</h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handlePaymentFormSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-xs text-gray-500 font-medium">
            Name on Card
          </label>
          <input
            className="border-b border-gray-200 py-2 outline-none text-sm"
            type="text"
            id="name"
            placeholder="John Doe"
            {...register("cardHolder", { required: true })}
            aria-invalid={errors.cardHolder ? "true" : "false"}
          />
          {errors.cardHolder && (
            <p className="text-xs text-red-500">{errors.cardHolder.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="cardNumber"
            className="text-xs text-gray-500 font-medium"
          >
            Card Number
          </label>
          <input
            className="border-b border-gray-200 py-2 outline-none text-sm"
            type="text"
            id="cardNumber"
            placeholder="123456789123"
            {...register("cardNumber", { required: true })}
            aria-invalid={errors.cardNumber ? "true" : "false"}
          />
          {errors.cardNumber && (
            <p className="text-xs text-red-500">{errors.cardNumber.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="expirationDate"
            className="text-xs text-gray-500 font-medium"
          >
            Expiration Date
          </label>
          <input
            className="border-b border-gray-200 py-2 outline-none text-sm"
            type="text"
            id="expirationDate"
            placeholder="01/32"
            {...register("expirationDate")}
          />
          {errors.expirationDate && (
            <p className="text-xs text-red-500">
              {errors.expirationDate.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
            CVV
          </label>
          <input
            className="border-b border-gray-200 py-2 outline-none text-sm"
            type="text"
            id="cvv"
            placeholder="123"
            {...register("cvv")}
          />
          {errors.cvv && (
            <p className="text-xs text-red-500">{errors.cvv.message}</p>
          )}
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="klarna"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="cards"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer"
        >
          Checkout
          <ShoppingCartIcon className="w-3 h-3" />
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
