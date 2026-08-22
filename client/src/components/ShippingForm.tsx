import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShippingFormInputs, shippingFormSchema } from "@/types";
import { ArrowRight } from "lucide-react";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter();

  const handleShippingFormSubmit: SubmitHandler<ShippingFormInputs> = (
    data,
  ) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <div className="">
      <h2 className="font-medium mb-4">Shipping Address</h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleShippingFormSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-xs text-gray-500 font-medium">
            Name
          </label>
          <input
            className="border-b border-gray-200 py-2 outline-none text-sm"
            type="text"
            id="name"
            placeholder="John Doe"
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xs text-gray-500 font-medium">
            Email
          </label>
          <input
            className="border-b border-gray-200 py-2 outline-none text-sm"
            type="email"
            id="email"
            placeholder="john.doe@email.com"
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-xs text-gray-500 font-medium">
            Phone
          </label>
          <input
            className="border-b border-gray-200 py-2 outline-none text-sm"
            type="text"
            id="phone"
            placeholder="1234567890"
            {...register("phone", { required: true })}
            aria-invalid={errors.phone ? "true" : "false"}
          />
          {errors.phone && (
            <p className="text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="address"
            className="text-xs text-gray-500 font-medium"
          >
            Address
          </label>
          <input
            className="border-b border-gray-200 py-2 outline-none text-sm"
            type="text"
            placeholder="123 Main St, Anytown"
            id="address"
            {...register("address", { required: true })}
            aria-invalid={errors.address ? "true" : "false"}
          />
          {errors.address && (
            <p className="text-xs text-red-500">{errors.address.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="city" className="text-xs text-gray-500 font-medium">
            City
          </label>
          <input
            className="border-b border-gray-200 py-2 outline-none text-sm"
            type="text"
            id="city"
            placeholder="Melbourne"
            {...register("city", { required: true })}
            aria-invalid={errors.city ? "true" : "false"}
          />
          {errors.city && (
            <p className="text-xs text-red-500">{errors.city.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer"
        >
          Continue
          <ArrowRight className="w-3 h-3" />
        </button>
      </form>
    </div>
  );
};

export default ShippingForm;
