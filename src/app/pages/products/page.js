"use client";
import Image from "next/image";
import KitCard from "@/components/kitCard/KitCard";
import ProductCard from "@/components/productCard/ProductCard";
import Filter from "@/components/FilterFunction/Filter";

export default function Home() {
  const productTemplate = {
    title: "Sony FX6",
    description: "Professional cinema camera.",
    price: "30,000 DKK",
    buttonText: "Rent Now",
    buttonLink: "/products/sony-fx6",
    imageSrc: "/img/sony_fx6.jpg"
  };

  const products = Array(12).fill(productTemplate);

  return (
    <div className="flex flex-col md:flex-row gap-6 px-6 min-h-screen bg-white">
      {/* Filter Column (Fixed Width, Sticky) */}
      <div className="md:w-[350px] flex-shrink-0 mt-40 md:sticky md:top-0 z-10">
        <Filter />
        <div className="h-[1000px] bg-gray-200">Test</div>
      </div>

      {/* Product Section (Flexible Width with Centered Title) */}
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text-black text-4xl font-bold mt-20 mb-10 sticky top-0 z-20">
          Full Kits
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-8 place-items-center max-w-4xl mb-20">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              price={product.price}
              buttonText={product.buttonText}
              buttonLink={product.buttonLink}
              imageSrc={product.imageSrc}
              className="text-black bg-white"
              bgColor="bg-white"
              buttonBgColor="bg-lime"
              buttonTextColor="text-black"
              gapClass="gap-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
