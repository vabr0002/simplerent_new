"use client"; // Indicates this is a client-side component in Next.js

import Image from "next/image"; // Optimized image component from Next.js
import React from "react"; // React core library
import Button from "../button/Button"; // Custom reusable Button component

// ProductCard component with customizable props and default values
const ProductCard = ({
  title = "Product Title", // Default product title
  description = "Product Description", // Default product description
  price = "Product Price", // Default product price
  imageSrc = "/img/sony_fx6.jpg", // Default image source
  buttonText = "Reserve", // Default button text
  buttonLink = "/pages/singleProduct" // Default button link
}) => {
  return (
    // Card container with padding, border, and hover effects
    <div className="p-6 rounded-lg border-2 hover:shadow-sm group transition-transform duration-300">
      {/* Image container with fixed height and overflow handling */}
      <div className="relative w-full h-[160px] mb-6 overflow-hidden">
        <Image
          src={imageSrc} // Image source from props
          alt={title} // Alt text based on title for accessibility
          width={240} // Fixed width for optimization
          height={160} // Fixed height matching container
          className="w-full h-full object-cover rounded transition-transform duration-500 group-hover:scale-110" // Scales up on hover
        />
      </div>
      {/* Product title */}
      <h3 className="text-lg text-black font-semibold">{title}</h3>
      {/* Product description */}
      <p className="text-sm text-black mt-6">{description}</p>
      {/* Product price */}
      <p className="text-base text-black font-bold">{price}</p>
      {/* Button section */}
      <div className="flex justify-between items-center mt-6">
        <Button
          href={buttonLink} // Link destination from props
          className="bg-lime border-2 border-lime hover:scale-105" // Custom styling with hover scaling
        >
          {buttonText} {/* Button label from props */}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
