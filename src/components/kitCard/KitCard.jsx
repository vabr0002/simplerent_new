"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaFolderOpen } from "react-icons/fa";
import Link from "next/link";

function Card({
  title = "Sony Fx6",
  description = "This is a placeholder description.",
  buttonText = "Button Text",
  imageSrc = "/img/sony_fx6.jpg",
  borderColor = "gray-300",
  bgColor = "black",
  textColor = "white",
  buttonBgColor = "lime",
  buttonTextColor = "black",
  heartColor = "lime",
  borderWidth = "border",
  borderRadius = "rounded-xl",
  className = ""
}) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <article
        className={`${className} ${borderWidth} ${borderRadius} border-darkgrey shadow-md overflow-hidden gap-4 relative w-full max-w-7xl flex flex-row h-72`}
      >
        {/* Venstre side med billede */}
        <div
          className="w-1/2 overflow-hidden cursor-pointer -mr-6"
          onClick={() => setIsLightboxOpen(true)}
        >
          <Image
            src={imageSrc}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Højre side med tekst og knap */}
        <div className="w-1/2 flex flex-col justify-end py-6 px-6">
          <div className="space-y-2">
            <h2 className={`text-2xl font-bold text-${textColor}`}>{title}</h2>
            <p className={`text-p text-${textColor}`}>{description}</p>
            <Link href="/pages/products" className="inline-block">
              <button
                className={`bg-${buttonBgColor} text-${buttonTextColor} px-8 py-3 rounded-xl text-p relative overflow-hidden transition-all duration-500 border-2 border-${buttonBgColor} group hover:bg-transparent`}
              >
                <span className="relative z-10">{buttonText}</span>
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:opacity-0 transition-all duration-500 ease-in-out"></span>
              </button>
            </Link>
          </div>
          <div className="absolute top-3 right-3 cursor-pointer hover:scale-110">
            <FaFolderOpen
              size={30}
              className={`text-${heartColor}`}
              strokeWidth={2}
            />
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;
