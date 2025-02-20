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
  // New style props with defaults
  bgColor = "black",
  textColor = "white",
  borderColor = "gray-300",
  borderWidth = "border",
  borderRadius = "rounded-2xl",
  buttonBgColor = "lime",
  buttonTextColor = "black",
  heartColor = "lime",
  className = "" // For additional custom styles
}) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const zoomRef = useRef(null);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLightboxOpen]);

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setZoom(1);
  };

  const handleZoom = (event) => {
    event.preventDefault();
    const newZoom = zoom + event.deltaY * -0.002;
    setZoom(Math.min(Math.max(newZoom, 1), 3));
  };

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
      <article
        className={`${className} ${borderWidth}-${borderColor} bg-${bgColor} ${borderRadius}  overflow-hidden p-4 relative`}
      >
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

        <div className="mt-4">
          <h2 className={`text-lg font-bold text-${textColor}`}>{title}</h2>
          <p className={`text-sm text-${textColor}`}>{description}</p>
          <p className={`text-md font-bold text-${textColor} mt-1`}>{price}</p>

          <a href={buttonLink} className="inline-block mt-3">
            <button
              className={`bg-${buttonBgColor} text-${buttonTextColor} px-4 py-2 rounded-md text-sm font-semibold shadow-md`}
            >
              {buttonText}
            </button>
          </a>
        </div>

        <div className="absolute bottom-4 right-4">
          <Heart size={24} className={`text-${heartColor}`} strokeWidth={2} />
        </div>
      </article>

      {/* Lightbox Overlay */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeLightbox}
          onWheel={handleZoom}
        >
          <div
            className="relative max-w-4xl w-full p-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onMouseMove={handleMouseMove}
            ref={zoomRef}
          >
            <button
              className="absolute top-6 right-6 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            <div className="relative overflow-hidden">
              <Image
                src={imageSrc}
                alt="product enlarged"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg transition-transform"
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: `${position.x}% ${position.y}%`
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
