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
  borderColor = "gray-300",
  bgColor = "black",
  textColor = "white",
  buttonBgColor = "lime",
  buttonTextColor = "black",
  heartColor = "lime",
  borderWidth = "border",
  borderRadius = "rounded-2xl",
  className = ""
}) {
  return (
    <>
      <article
        className={`${className} ${borderWidth} bg-${bgColor} ${borderRadius} border-black border-2 shadow-md overflow-hidden p-4 relative pb-4`}
      >
        <div
          className="relative w-full h-2/3 bg-gray-300 rounded-lg overflow-hidden cursor-pointer"
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
        <div className="mt-4 text-center">
          <h2 className={`text-lg font-bold text-${textColor}`}>{title}</h2>
          <p className={`text-sm text-${textColor}`}>{description}</p>
          <a href={buttonLink} className="inline-block mt-3">
            <button
              className={`bg-${buttonBgColor} text-${buttonTextColor} px-4 py-2 rounded-md text-sm font-semibold shadow-md mx-auto`}
            >
              {buttonText}
            </button>
          </a>
        </div>
        <div className="absolute bottom-4 right-4">
          <Heart size={24} className={`text-${heartColor}`} strokeWidth={2} />
        </div>
      </article>
      {/* Lightbox omitted for brevity */}
    </>
  );
}

export default Card;
