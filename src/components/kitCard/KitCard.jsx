"use client"; // Indicates this is a client-side component in Next.js

import React, { useState } from "react"; // React core with useState hook
import Image from "next/image"; // Optimized image component from Next.js
import { FaFolderOpen } from "react-icons/fa"; // Folder icon from react-icons
import Link from "next/link"; // Next.js Link for client-side navigation

// Card component with customizable props and default values
function Card({
  title = "Sony Fx6", // Default card title
  description = "This is a placeholder description.", // Default description text
  buttonText = "Button Text", // Default button label
  imageSrc = "/img/sony_fx6.jpg", // Default image source
  borderColor = "gray-300", // Default border color
  bgColor = "black", // Default background color (not used in this version)
  textColor = "white", // Default text color
  buttonBgColor = "lime", // Default button background color
  buttonTextColor = "black", // Default button text color
  heartColor = "lime", // Default folder icon color
  borderWidth = "border", // Default border width class
  borderRadius = "rounded-xl", // Default border radius class
  className = "" // Additional custom classes passed via props
}) {
  // State to control the visibility of a lightbox (not implemented in this code)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      {/* Card container with dynamic classes and fixed layout */}
      <article
        className={`${className} ${borderWidth} ${borderRadius} border-darkgrey shadow-md overflow-hidden gap-4 relative w-full max-w-7xl flex flex-row h-72`}
      >
        {/* Left Side: Image Section */}
        <div
          className="w-1/2 overflow-hidden cursor-pointer -mr-6" // Negative margin to overlap slightly with right side
          onClick={() => setIsLightboxOpen(true)} // Opens lightbox on click (logic not implemented)
        >
          <Image
            src={imageSrc} // Image source from props
            alt={title} // Alt text based on title for accessibility
            width={600} // Fixed width for optimization
            height={400} // Fixed height for optimization
            className="w-full h-full object-cover" // Ensures image fills container and crops if needed
          />
        </div>

        {/* Right Side: Text and Button Section */}
        <div className="w-1/2 flex flex-col justify-end py-6 px-6">
          <div className="space-y-2">
            {/* Card Title */}
            <h2 className={`text-2xl font-bold text-${textColor}`}>{title}</h2>
            {/* Card Description */}
            <p className={`text-p text-${textColor}`}>{description}</p>
            {/* Button with Link */}
            <Link href="/pages/products" className="inline-block">
              <button
                className={`bg-${buttonBgColor} text-${buttonTextColor} px-8 py-3 rounded-xl text-p relative overflow-hidden transition-all duration-500 border-2 border-${buttonBgColor} group hover:bg-transparent`}
              >
                {/* Button Text */}
                <span className="relative z-10">{buttonText}</span>
                {/* Gradient Overlay for Hover Effect */}
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:opacity-0 transition-all duration-500 ease-in-out"></span>
              </button>
            </Link>
          </div>
          {/* Folder Icon (top-right corner) */}
          <div className="absolute top-3 right-3 cursor-pointer hover:scale-110">
            <FaFolderOpen
              size={30} // Icon size
              className={`text-${heartColor}`} // Dynamic color from props
              strokeWidth={2} // Stroke width for icon outline
            />
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;
