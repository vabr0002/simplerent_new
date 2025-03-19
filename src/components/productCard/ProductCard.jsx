"use client";
import Image from "next/image";
import React from "react";
import Button from "../button/Button";

const ProductCard = ({
  title = "Product Title",
  description = "Product Description",
  price = "Product Price",
  imageSrc = "/img/hero.webp",
  buttonText = "Reserve",
  buttonLink = "/pages/singleProduct",
}) => {
  return (
    <div className="p-6 rounded-lg border-2 hover:shadow-md hover:scale-105 group transition-transform duration-300">
      <div className="relative w-full h-[160px] mb-6 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={240}
          height={160}
          className="w-full h-full object-cover rounded transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg text-black font-semibold">{title}</h3>
      <p className="text-sm text-black mt-6">{description}</p>
      <p className="text-base text-black font-bold">{price}</p>
      <div className="flex justify-between items-center mt-6">
        <Button
          href={buttonLink}
          className="bg-lime border-2 border-lime hover:scale-105"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
