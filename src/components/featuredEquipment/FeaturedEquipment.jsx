import React from "react";
import ProductCard from "../productCard/ProductCard";

const FeaturedEquipmentSection = () => {
  // Sample equipment data (replace with real data as needed)
  const equipment = [
    {
      id: 1,
      title: "Sony FX6",
      description: "Full-frame cinema camera",
      price: "500 DKK",
      imageSrc: "/img/sony_fx6.jpg"
    },
    {
      id: 2,
      title: "Canon 50mm Lens",
      description: "Prime lens for portraits",
      price: "200 DKK",
      imageSrc: "/img/sony_fx6.jpg"
    },
    {
      id: 3,
      title: "LED Panel",
      description: "Portable lighting solution",
      price: "150 DKK",
      imageSrc: "/img/sony_fx6.jpg"
    },
    {
      id: 4,
      title: "Rode Mic",
      description: "High-quality audio recording",
      price: "300 DKK",
      imageSrc: "/img/sony_fx6.jpg"
    }
  ];

  return (
    <section className="bg-darkgrey h-[55vh] flex flex-col items-center justify-center">
      {/* Centered Title */}
      <h1 className="text-center text-4xl font-bold mb-8 text-white">
        Featured Equipment This Week
      </h1>

      {/* 1x4 Grid */}
      <div className="grid grid-cols-4 gap-6 mx-auto max-w-screen-xl px-4">
        {equipment.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            buttonText="Rent Now"
            buttonLink="#"
            imageSrc={item.imageSrc}
            bgColor="inherit"
            textColor="white"
            borderColor="gray-600"
            borderWidth="border-2"
            buttonBgColor="lime"
            buttonTextColor="black"
            heartColor="lime"
            className="w-[240px]" // Fixed width for consistency
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedEquipmentSection;
