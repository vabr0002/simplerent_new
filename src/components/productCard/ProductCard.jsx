"use client";
import Image from "next/image";
import React from "react";

const ProductCard = ({
  title,
  description,
  price,
  imageSrc,
  buttonText,
  buttonLink,
  bgColor,
  textColor,
  borderColor,
  borderWidth,
  buttonBgColor,
  buttonTextColor,
  heartColor,
  className
}) => {
  return (
    <div
      className={`p-4 rounded-lg ${bgColor} ${textColor} ${borderColor} ${borderWidth} ${className}`}
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
      <a
        href={buttonLink}
        className={`inline-block mt-4 px-4 py-2 rounded ${buttonBgColor} ${buttonTextColor} hover:opacity-90`}
      >
        {buttonText}
      </a>
      {/* Hvis du har en hjerte-funktion, kan den tilføjes her */}
      <span className={`text-${heartColor}`}>♥</span>
    </div>
  );
};

export default ProductCard;
