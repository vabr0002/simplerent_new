"use client"; // Indicates this is a client-side component in Next.js

import React, { useState } from "react"; // React core with useState hook
import Image from "next/image"; // Optimized image component from Next.js
import Button from "../button/Button"; // Custom reusable Button component

// SingleProduct component (currently accepts no props)
const SingleProduct = ({}) => {
  // Static product data object
  const productData = {
    title: "Sony FX6", // Product title
    dayprice1: "300", // Price for 1 day rental
    dayprice2: "400", // Price for 2 days rental
    dayprice3: "500", // Price for 3 days rental
    priceSelectedRentalPreiod: "400", // Price for the selected rental period (typo in "Preiod")
    description:
      "Professionelt filmkamera med fuld-frame CMOS-sensor, 4K optagelse og avanceret autofokus.lorem ipsum duller daller dit", // Product description
    mainImageSrc: "/img/sony_fx6.jpg", // Main product image
    singleProductThumbnails: [
      "/img/sony_fx6.jpg",
      "/img/sony_fx6.jpg",
      "/img/sony_fx6.jpg",
      "/img/sony_fx6.jpg"
    ] // Array of thumbnail images (currently all the same)
  };

  // State to track the currently selected image
  const [selectedImage, setSelectedImage] = useState(productData.mainImageSrc);

  // Function to update selected image when a thumbnail is clicked
  const handleThumbnailClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Function to navigate to the previous image in the thumbnail array
  const handlePrev = () => {
    const currentIndex =
      productData.singleProductThumbnails.indexOf(selectedImage);
    const prevIndex =
      currentIndex === 0
        ? productData.singleProductThumbnails.length - 1 // Loop to last image
        : currentIndex - 1; // Move to previous image
    setSelectedImage(productData.singleProductThumbnails[prevIndex]);
  };

  // Function to navigate to the next image in the thumbnail array
  const handleNext = () => {
    const currentIndex =
      productData.singleProductThumbnails.indexOf(selectedImage);
    const nextIndex =
      currentIndex === productData.singleProductThumbnails.length - 1
        ? 0 // Loop to first image
        : currentIndex + 1; // Move to next image
    setSelectedImage(productData.singleProductThumbnails[nextIndex]);
  };

  return (
    // Main container for the single product page
    <div>
      {/* Product Image and Info Section */}
      <div className="grid grid-cols-[600px,1fr] gap-16 mt-32">
        {/* Column 1: Image and Thumbnails */}
        <div className="grid grid-rows-[auto,auto] gap-2">
          {/* Main Image Display */}
          <div className="w-[600px] h-[400px] relative overflow-hidden">
            <Image
              src={selectedImage} // Currently selected image
              alt={productData.title} // Alt text for accessibility
              width={600} // Fixed width for optimization
              height={400} // Fixed height matching container
              className="w-full h-full object-cover" // Ensures image covers area
            />
            {/* Previous Arrow Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 
                        bg-gray-800 bg-opacity-50 text-black p-2 rounded-full 
                        z-10" // Positioned on left, semi-transparent
            >
              ◀
            </button>
            {/* Next Arrow Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 
                        bg-gray-800 bg-opacity-50 text-black p-2 rounded-full 
                        z-10" // Positioned on right, semi-transparent
            >
              ▶
            </button>
          </div>
          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            {productData.singleProductThumbnails.map((img, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(img)} // Set selected image on click
                className="cursor-pointer"
              >
                <Image
                  src={img} // Thumbnail image source
                  alt={`${productData.title} visning ${index + 1}`} // Descriptive alt text
                  width={80} // Fixed width for thumbnails
                  height={60} // Fixed height for thumbnails
                  className="object-cover" // Ensures image fits container
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Product Info and Rental Options */}
        <div className="grid grid-rows-[auto,auto,auto,auto] gap-6">
          <div className="p-4">
            {/* Product Title */}
            <div className="text-h1 font-bold text-black">
              Titel: {productData.title}
            </div>
            {/* Pricing Information */}
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
          {/* Date Inputs (placeholders, not functional yet) */}
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
          {/* Reserve Button */}
          <Button className="bg-lime text-black hover:bg-transparent">
            Reserver
          </Button>
        </div>
      </div>

      {/* Description and Related Products Section */}
      <div className="grid grid-rows-[auto,auto,auto,auto] gap-4 mt-8 mb-20">
        {/* Specifications Header */}
        <div className="font-semibold text-black">
          <h4 className="text-h3">Specifikationer</h4>
        </div>
        {/* Product Description */}
        <div className="text-black text-p">{productData.description}</div>
        {/* Related Products Section */}
        <div className="text-h4 font-semibold text-black">
          <div>Related products</div>
          {/* Grid of Placeholder Related Products */}
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
