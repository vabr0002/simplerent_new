"use client";
import Image from "next/image";
import React from "react";
import Button from "../button/Button";

const ProductCard = ({
  title,
  description,
  price,
  imageSrc,
  buttonText = "Reserve",
  buttonLink = "/pages/singleProduct",
  bgColor = "",
  textColor = "",
  borderColor = "",
  borderWidth = "",
  buttonBgColor = "",
  buttonTextColor = "",
  heartColor = "",
  className = "",
  gapClass = "gap4"
}) => {
  return (
    <div
      className={`p-4 rounded-lg ${gapClass} ${bgColor} ${textColor} ${borderColor} ${borderWidth} ${className}`}
    >
      <div className="relative w-full h-[160px] mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={240}
          height={160}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>
      <p className="text-base font-bold mt-2">{price}</p>
      <div className="flex justify-between items-center">
        <Button
          href={buttonLink}
          className={`${buttonBgColor} ${buttonTextColor}`}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
