import ProductInteractions from "@/components/ProductInteractions";
import { ProductType } from "@/types";
import Image from "next/image";

//Temporary
const product: ProductType = {
  id: "1",
  name: "Adidas CoreFit T-Shirt",
  shortDescription: "This is a sample product",
  description:
    "This is a detailed description of the sample product lore that provides more information about its features, materials, and usage.",
  price: 59.99,
  sizes: ["s", "m", "l", "xl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { size, color } = await searchParams;

  const selectedColor = color || product.colors[0];
  const selectedSize = size || (product.sizes[0] as string);

  return (
    <div className="flex flex-col lg:flex-row gap-4 md:gap-12 mt-12">
      {/*Image  */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      {/* Details */}
      <div className="w-full lg:w-7/12">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className=" text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-medium">${product.price.toFixed(2)}</h2>
        {/* Size, Color, and Quantity Interactions */}
        <ProductInteractions
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          product={product}
        />
        {/* Card Info  */}
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
        <p className="text-gray-500 text-xs mt-2">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-black">Privacy Policy</span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black">Refund Policies</span>.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
