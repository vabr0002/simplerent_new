"use client";
import React, { useState } from "react";
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

  return (
    <>
      {/* Card Component */}
      <article className="w-80 rounded-2xl border border-white bg-black shadow-md overflow-hidden">
        {/* Image - Click to Open Lightbox */}
        <div className="relative">
          <Image
            src={imageSrc}
            alt="card"
            width={320}
            height={240}
            className="w-full h-48 object-cover bg-gray-300 cursor-pointer"
            onClick={() => setIsLightboxOpen(true)} // Open Lightbox
          />
        </div>

        {/* Card Content */}
        <div className="p-4 text-center">
          <h2 className="font-helvetica text-lg font-bold text-white">
            {title}
          </h2>
          <p className="text-sm text-gray-400">{description}</p>

          {/* Button with Link */}
          <a href={buttonLink} className="inline-block mt-3">
            <button className="border border-white px-4 py-1 rounded-lg text-sm text-white font-semibold">
              {buttonText}
            </button>
          </a>
        </div>

        {/* Heart Icon */}
        <div className="absolute bottom-4 right-4">
          <Heart size={24} className="text-lime-400" strokeWidth={2} />
        </div>
      </article>

      {/* Lightbox Overlay */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition"
            onClick={() => setIsLightboxOpen(false)}
          >
            <X size={24} />
          </button>

          {/* Large Image */}
          <div className="relative max-w-4xl w-full p-4">
            <Image
              src={imageSrc}
              alt="card enlarged"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
