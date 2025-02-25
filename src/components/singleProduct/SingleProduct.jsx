"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../button/Button";

const SingleProduct = () => {
  const productData = {
    title: "Sony FX6",
    dayprice1: "300",
    dayprice2: "400",
    dayprice3: "500",
    priceSelectedRentalPreiod: "400",
    description:
      "Professionelt filmkamera med fuld-frame CMOS-sensor, 4K optagelse og avanceret autofokus.",
    mainImageSrc: "/img/sony_fx6.jpg",
    singleProductThumbnails: [
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
    <div className="m-12 single-product-wrapper">
      <div className="flex gap-5">
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
            {productData.singleProductThumbnails.map((img, index) => (
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

        <div className="flex flex-col gap-4">
          <div className="text-h1 font-bold text-white">
            Titel: {productData.title}
          </div>
          <div className="text-white">
            <div className="flex flex-col justify-center gap-4 ml-20 mb-4">
              <h3>1 Day {productData.dayprice1} DKK excl. Vat</h3>
              <h3>2 Days {productData.dayprice2} DKK excl. Vat</h3>
              <h3>3 Days {productData.dayprice3} DKK excl. Vat</h3>
            </div>
            <div className="ml-11">
              Price for selected rental period{" "}
              {productData.priceSelectedRentalPreiod}
            </div>
          </div>
          <div className="text-white">Dato Picker</div>
          <Button className="bg-lime text-black">Reserver</Button>
        </div>
      </div>

      <div className="mt-8">
        <div className="text-xl font-semibold text-black">Specifikationer</div>
      </div>
      <div className="mt-4">
        <div className="text-black">Tekst ved siden af specifikationer</div>
      </div>
      <div className="mt-4 text-black">{productData.description}</div>
      <div className="mt-8">
        <div className="text-xl font-semibold text-black">Related Products</div>
      </div>
    </div>
  );
};

export default SingleProduct;
