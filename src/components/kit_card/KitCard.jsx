import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

function Card({
  title = "Sony Fx6",
  description = "This is a placeholder description.",
  buttonText = "Button Text",
  buttonLink = "#",
  imageSrc = "/img/sony_fx6.jpg",
}) {
  return (
    <article className="w-80 rounded-2xl border border-white bg-black shadow-md overflow-hidden">
      {/* Image */}
      <div className="relative">
        <Image
          src={imageSrc}
          alt="card"
          width={320}
          height={240}
          className="w-full h-48 object-cover bg-gray-300"
        />
      </div>

      {/* Card Content */}
      <div className="p-4 text-center">
        <h2 className="font-helvetica text-lg font-bold text-white">{title}</h2>
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
  );
}

export default Card;
