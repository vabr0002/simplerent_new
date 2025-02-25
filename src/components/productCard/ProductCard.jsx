"use client";

import Image from "next/image";
import React, { useState } from "react";

const SingleProduct = () => {
  const productData = {
    title: "Sony FX6",
    description:
      "Professionelt filmkamera med fuld-frame CMOS-sensor, 4K optagelse og avanceret autofokus.",
    mainImageSrc: "/img/sony_fx6.jpg",
    thumbnailImages: [
      "/img/sony_fx6.jpg",
      "/img/sony_fx6.jpg",
      "/img/sony_fx6.jpg",
      "/img/sony_fx6.jpg"
    ]
  };

  const [selectedImage, setSelectedImage] = useState(productData.mainImageSrc);

  const handleThumbnailClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div className="m-12">
      <div className="flex gap-5">
        {/* Billedsektion */}
        <div>
          <div className="w-[600px] h-[400px] relative">
            <Image
              src={selectedImage}
              alt={productData.title}
              width={320}
              height={240}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2 mt-2">
            {productData.thumbnailImages.map((img, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(img)}
                className="cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`${productData.title} visning ${index + 1}`}
                  width={80}
                  height={60}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Produktinformation */}
        <div className="flex flex-col gap-4">
          <div className="text-h1 text-gray-800">{productData.title}</div>
          <div className="text-gray-600">{productData.description}</div>
          <div className="text-gray-500">Dato Picker (placeholder)</div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Reserver
          </button>
        </div>
      </div>

      {/* Yderligere sektioner */}
      <div className="mt-8">
        <div className="text-xl font-semibold">Specifikationer</div>
      </div>
      <div className="mt-4">
        <div>Tekst ved siden af specifikationer</div>
      </div>
      <div className="mt-4">Yderligere beskrivelser</div>
      <div className="mt-8">
        <div className="text-xl font-semibold">Related Products</div>
      </div>
    </div>
  );
};

export default SingleProduct;
