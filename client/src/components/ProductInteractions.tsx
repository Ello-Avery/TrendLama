"use client";
import useCartStore from "@/stores/cartStore";
import { ProductType } from "@/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductInteractions = ({
  selectedColor,
  selectedSize,
  product,
}: {
  selectedColor: string;
  selectedSize: string;
  product: ProductType;
}) => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { addToCart } = useCartStore();

  const handleTypeChange = (type: "size" | "color", value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (!type) return;

    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    }

    if (type === "decrement") {
      if (quantity === 1) return;
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = (type: "add" | "buy") => {
    if (!type) return;

    addToCart({
      ...product,
      selectedColor,
      selectedSize,
      quantity,
    });

    if (type === "add") {
      toast.success("Product added to cart");
    }

    if (type === "buy") {
      router.push("/cart");
    }
  };
  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* Size */}
      <div className="flex flex-col gap-2 text-xs">
        <span className=" text-gray-500">Size</span>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <div
              key={size}
              className={`cursor-pointer border p-[2px] ${selectedSize === size ? "border-gray-600" : "border-gray-300"}`}
              onClick={() => handleTypeChange("size", size)}
            >
              <div
                className={`flex items-center justify-center text-center w-6 h-6 ${selectedSize === size ? " bg-black text-white" : "bg-white text-black"}`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Color */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">Colour</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              className={`cursor-pointer border p-[4px] ${selectedColor === color ? "border-gray-300" : "border-white"}`}
              key={color}
              onClick={() => handleTypeChange("color", color)}
            >
              <div className="w-6 h-6" style={{ backgroundColor: color }} />
            </div>
          ))}
        </div>
      </div>
      {/* Quantity */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">Quantity</span>
        <div className="flex items-center gap-2">
          <div
            className={`border p-[2px] border-gray-300 ${quantity === 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
            onClick={() => handleQuantityChange("decrement")}
          >
            <Minus className="w-4 h-4" />
          </div>
          <div className="text-lg">
            <span>{quantity}</span>
          </div>
          <div
            className="cursor-pointer border p-[2px] border-gray-300"
            onClick={() => handleQuantityChange("increment")}
          >
            <Plus className="w-4 h-4" />
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-col gap-2">
        <button
          onClick={() => handleAddToCart("add")}
          className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium"
        >
          <Plus className="w-4 h-4" />
          Add to Cart
        </button>

        <button
          onClick={() => handleAddToCart("buy")}
          className="ring-1 ring-gray-400 shadow-lg text-gray-800 px-4 py-2 rounded-md flex items-center justify-center cursor-pointer gap-2 text-sm font-medium"
        >
          <ShoppingCart className="w-4 h-4" />
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductInteractions;
