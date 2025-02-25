"use client";

import Image from "next/image";
import React, { useState } from "react";

const SingleProduct = () => {
  // Definér titel og billede-sti
  const title = "Produkt Titel";
  const mainImageSrc = "/img/sony_fx6.jpg";

  // Små billeder array
  const thumbnailImages = [
    "/img/sony_fx6.jpg",
    "/img/sony_fx6.jpg",
    "/img/sony_fx6.jpg",
    "/img/sony_fx6.jpg"
  ];

  // State til at holde styr på det valgte billede
  const [selectedImage, setSelectedImage] = useState(mainImageSrc);

  // Funktion til at ændre hovedbilledet
  const handleThumbnailClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div className="m-12">
      <div className="flex gap-5 ">
        <div>
          <div className="w-[600px] h-[400px] relative">
            <Image
              src={selectedImage}
              alt={title}
              width={320}
              height={240}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-2 mt-2">
            {thumbnailImages.map((img, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(img)}
                className="cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`${title} visning ${index + 1}`}
                  width={80}
                  height={60}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div>Overskrift</div>
          <div>Beskrivende tekst</div>
          <div>Dato Picker</div>
          <div>Reserver Knap</div>
        </div>
      </div>
      <div>
        <div>Specifiktationer</div>
      </div>
      <div>
        <div>Tekst ved siden af specifikationer</div>
      </div>
      <div>Yderlige beskrivelser</div>
      <div>
        <div>Related Products</div>
      </div>
    </div>
  );
};

export default SingleProduct;
