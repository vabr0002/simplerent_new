"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Heart, X } from "lucide-react";

function ProductCard({
  title = "Single Product",
  description = "Small info",
  price = "Price dkkr",
  buttonText = "Text",
  buttonLink = "#",
  imageSrc = "/img/product_placeholder.jpg",
}) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const zoomRef = useRef(null);

  // Disable scrolling when Lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isLightboxOpen]);

  // Function to close Lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setZoom(1); // Reset zoom on close
  };

  // Handle zooming on mouse scroll
  const handleZoom = (event) => {
    event.preventDefault(); // Prevent default page scroll
    const newZoom = zoom + event.deltaY * -0.002; // Adjust zoom level
    setZoom(Math.min(Math.max(newZoom, 1), 3)); // Limit zoom between 1x - 3x
  };

  // Handle mouse move to track cursor position
  const handleMouseMove = (event) => {
    if (!zoomRef.current) return;
    const { left, top, width, height } =
      zoomRef.current.getBoundingClientRect();

    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;

    setPosition({ x, y });
  };

  return (
    <>
      {/* Product Card */}
      <article className="w-90 rounded-2xl border border-gray-300 bg-black shadow-md overflow-hidden p-4 relative">
        {/* Image - Click to Open Lightbox */}
        <div
          className="relative w-full h-48 bg-gray-300 rounded-lg overflow-hidden cursor-pointer"
          onClick={() => setIsLightboxOpen(true)}
        >
          <Image
            src={imageSrc}
            alt={title}
            width={320}
            height={240}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="mt-4">
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <p className="text-sm text-white">{description}</p>
          <p className="text-md font-bold text-white mt-1">{price}</p>

          {/* Button */}
          <a href={buttonLink} className="inline-block mt-3">
            <button className="bg-lime text-black px-4 py-2 rounded-md text-sm font-semibold shadow-md">
              {buttonText}
            </button>
          </a>
        </div>

        {/* Heart Icon */}
        <div className="absolute bottom-4 right-4">
          <Heart size={24} className="text-lime" strokeWidth={2} />
        </div>
      </article>

      {/* Lightbox Overlay */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeLightbox} // Click outside closes lightbox
          onWheel={handleZoom} // Zoom on scroll
        >
          {/* Lightbox Content - Prevent Click Propagation */}
          <div
            className="relative max-w-4xl w-full p-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onMouseMove={handleMouseMove} // Track cursor position
            ref={zoomRef}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>

            {/* Large Image with Zoom Effect */}
            <div className="relative overflow-hidden">
              <Image
                src={imageSrc}
                alt="product enlarged"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg transition-transform"
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: `${position.x}% ${position.y}%`,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
