"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../button/Button";

const SingleProduct = ({}) => {
  const productData = {
    title: "Sony FX6",
    dayprice1: "300",
    dayprice2: "400",
    dayprice3: "500",
    priceSelectedRentalPreiod: "400",
    description:
      "Professionelt filmkamera med fuld-frame CMOS-sensor, 4K optagelse og avanceret autofokus.lorem ipsum duller daller dit",
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

  const handlePrev = () => {
    const currentIndex =
      productData.singleProductThumbnails.indexOf(selectedImage);
    const prevIndex =
      currentIndex === 0
        ? productData.singleProductThumbnails.length - 1
        : currentIndex - 1;
    setSelectedImage(productData.singleProductThumbnails[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex =
      productData.singleProductThumbnails.indexOf(selectedImage);
    const nextIndex =
      currentIndex === productData.singleProductThumbnails.length - 1
        ? 0
        : currentIndex + 1;
    setSelectedImage(productData.singleProductThumbnails[nextIndex]);
  };

  return (
    <div>
      <div className="grid grid-cols-[600px,1fr] gap-16 mt-32 ">
        {/* Kolonne 1: Billede og Thumbnails */}
        <div className="grid grid-rows-[auto,auto] gap-2">
          <div className="w-[600px] h-[400px] relative overflow-hidden">
            <Image
              src={selectedImage}
              alt={productData.title}
              width={600}
              height={400}
              className="w-full h-full object-cover "
            />
            {/* Venstre pil */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 
                        bg-gray-800 bg-opacity-50 text-black p-2 rounded-full 
                         z-10"
            >
              ◀
            </button>
            {/* Højre pil */}
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 
                        bg-gray-800 bg-opacity-50 text-black p-2 rounded-full 
                         z-10"
            >
              ▶
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-4">
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

        {/* Kolonne 2: Produktinfo og Datepickers */}
        <div className="grid grid-rows-[auto,auto,auto,auto] gap-6 ">
          <div className="p-4">
            <div className="text-h1 font-bold text-black ">
              Titel: {productData.title}
            </div>
            <div className="text-black">
              <div className="grid grid-rows-3 gap-4 mb-4 font-bold">
                <h3>1 Day {productData.dayprice1} DKK excl. Vat</h3>
                <h3>2 Days {productData.dayprice2} DKK excl. Vat</h3>
                <h3>3 Days {productData.dayprice3} DKK excl. Vat</h3>
              </div>
              <div>
                Price for selected rental period ={" "}
                {productData.priceSelectedRentalPreiod} DKK
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="from"
              className="w-40 h-[45px] p-2 bg-white text-black rounded-lg outline-none border-2 border-gray-300 focus:border-lime"
            />
            <input
              type="text"
              placeholder="to"
              className="w-40 h-[45px] p-2 bg-white text-black rounded-lg outline-none border-2 border-gray-300 focus:border-lime"
            />
          </div>
          <Button className="bg-lime text-black hover:bg-transparent ">
            Reserver
          </Button>
        </div>
      </div>

      {/* Beskrivelse og Relaterede Produkter */}
      <div className="grid grid-rows-[auto,auto,auto,auto] gap-4 mt-8 mb-20 ">
        <div className="font-semibold text-black">
          <h4 className="text-h3">Specifikationer</h4>
        </div>

        <div className="text-black text-p">{productData.description}</div>
        <div className="text-h4 font-semibold text-black">
          <div>Related products</div>
          <div className="grid grid-cols-4 gap-4 mt-6 bg-darkgrey rounded-md p-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-[200px] bg-gray-200 rounded-lg flex items-center justify-center text-black"
              >
                Produkt {item} (Placeholder)
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
