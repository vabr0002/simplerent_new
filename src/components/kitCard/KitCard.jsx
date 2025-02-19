"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Heart, X } from "lucide-react";

function Card({
  title = "Sony Fx6",
  description = "This is a placeholder description.",
  buttonText = "Button Text",
  buttonLink = "#",
  imageSrc = "/img/sony_fx6.jpg",
}) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const zoomRef = useRef(null);

  // ... (existing hooks remain unchanged)

  return (
    <>
      {/* Card Component */}
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

        {/* Card Content - Centered */}
        <div className="mt-4 text-center">
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <p className="text-sm text-white">{description}</p>

          {/* Button with Link - Centered */}
          <a href={buttonLink} className="inline-block mt-3">
            <button className="bg-lime text-black px-4 py-2 rounded-md text-sm font-semibold shadow-md mx-auto">
              {buttonText}
            </button>
          </a>
        </div>

        {/* Heart Icon */}
        <div className="absolute bottom-4 right-4">
          <Heart size={24} className="text-lime" strokeWidth={2} />
        </div>
      </article>

      {/* ... (Lightbox remains unchanged) */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeLightbox} // Click outside closes lightbox
          onWheel={handleZoom} // Zoom on scroll
        >
          {/* ... (Lightbox content remains unchanged) */}
        </div>
      )}
    </>
  );
}

export default Card;
