"use client";
import Image from "next/image";
import KitCard from "@/components/kitCard/KitCard";
import ProductCard from "@/components/productCard/ProductCard";
import Filter from "@/components/FilterFunction/Filter";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-6 min-h-screen bg-white ">
      {/* Filter Column (Fixed Width) */}
      <div className="md:w-[350px] flex-shrink-0 mt-40">
        <Filter />
      </div>

      {/* Product Section (Flexible Width with Centered Title) */}
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text-black text-4xl font-bold mt-20 mb-10 sticky top-0">
          Full Kits
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center w-full mb-10">
          <ProductCard
            title="Sony FX6"
            description="Professional cinema camera."
            price="30,000 DKK"
            buttonText="Buy Now"
            buttonLink="/products/sony-fx6"
            imageSrc="/img/sony_fx6.jpg"
          />
          <ProductCard
            title="Sony FX6"
            description="Professional cinema camera."
            price="30,000 DKK"
            buttonText="Buy Now"
            buttonLink="/products/sony-fx6"
            imageSrc="/img/sony_fx6.jpg"
          />
          <ProductCard
            title="Sony FX6"
            description="Professional cinema camera."
            price="30,000 DKK"
            buttonText="Buy Now"
            buttonLink="/products/sony-fx6"
            imageSrc="/img/sony_fx6.jpg"
          />
          <ProductCard
            title="Sony FX6"
            description="Professional cinema camera."
            price="30,000 DKK"
            buttonText="Buy Now"
            buttonLink="/products/sony-fx6"
            imageSrc="/img/sony_fx6.jpg"
          />
          <ProductCard
            title="Sony FX6"
            description="Professional cinema camera."
            price="30,000 DKK"
            buttonText="Buy Now"
            buttonLink="/products/sony-fx6"
            imageSrc="/img/sony_fx6.jpg"
          />
          <ProductCard
            title="Sony FX6"
            description="Professional cinema camera."
            price="30,000 DKK"
            buttonText="Buy Now"
            buttonLink="/products/sony-fx6"
            imageSrc="/img/sony_fx6.jpg"
          />
          <ProductCard
            title="Sony FX6"
            description="Professional cinema camera."
            price="30,000 DKK"
            buttonText="Buy Now"
            buttonLink="/products/sony-fx6"
            imageSrc="/img/sony_fx6.jpg"
          />
          <ProductCard
            title="Sony FX6"
            description="Professional cinema camera."
            price="30,000 DKK"
            buttonText="Buy Now"
            buttonLink="/products/sony-fx6"
            imageSrc="/img/sony_fx6.jpg"
          />
          <ProductCard
            title="Sony FX6"
            description="Professional cinema camera."
            price="30,000 DKK"
            buttonText="Buy Now"
            buttonLink="/products/sony-fx6"
            imageSrc="/img/sony_fx6.jpg"
          />
          <ProductCard
            title="Sony FX6"
            description="Professional cinema camera."
            price="30,000 DKK"
            buttonText="Buy Now"
            buttonLink="/products/sony-fx6"
            imageSrc="/img/sony_fx6.jpg"
          />
          <ProductCard
            title="Sony FX6"
            description="Professional cinema camera."
            price="30,000 DKK"
            buttonText="Buy Now"
            buttonLink="/products/sony-fx6"
            imageSrc="/img/sony_fx6.jpg"
          />
          <ProductCard
            title="Sony FX6"
            description="Professional cinema camera."
            price="30,000 DKK"
            buttonText="Buy Now"
            buttonLink="/products/sony-fx6"
            imageSrc="/img/sony_fx6.jpg"
          />
        </div>
      </div>
    </div>
  );
}
