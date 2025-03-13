"use client";
import React, { useState, useEffect } from "react";
import Card from "../kitCard/KitCard";

const PopularKits = () => {
  const kits = [
    { id: 1, title: "Starter Kit", description: "Perfect for beginners" },
    { id: 2, title: "Professional Kit", description: "For the pros" },
    { id: 3, title: "Video Kit", description: "All-in-one video solution" },
    { id: 4, title: "Audio Kit", description: "For sound professionals" },
    { id: 5, title: "Lighting Kit", description: "Illuminate your scene" },
    { id: 6, title: "Action Kit", description: "For dynamic shoots" }
  ];

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Tjek skærmstørrelse efter mount på klienten
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwinds 'sm' breakpoint
    };

    // Sæt initial værdi
    handleResize();

    // Lyt til resize events
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Vis kun 3 kort på mobil, medmindre showAll er true; vis alle på desktop
  const displayedKits = isMobile && !showAll ? kits.slice(0, 3) : kits;

  return (
    <section className="bg-white py-10 pb-24">
      <h2 className="text-center text-h1 font-bold mt-8 mb-8 text-black">
        Most Rented Kits
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto max-w-screen-xl px-4">
        {displayedKits.map((kit) => (
          <Card
            key={kit.id}
            title={kit.title}
            description={kit.description}
            buttonText="Rent Now"
            buttonLink="#"
            imageSrc="/img/sony_fx6.jpg"
            borderColor="black"
            bgColor="lightgray"
            textColor="black"
            buttonBgColor="lime"
            buttonTextColor="black"
            heartColor="lime"
            borderWidth="border"
            borderRadius="rounded-2xl"
            className="w-[250px] h-[350px]"
            buttonSize="small"
          />
        ))}
      </div>
      {/* "Show More"-knap, kun synlig på mobil */}
      {!showAll && kits.length > 3 && (
        <div className="sm:hidden flex justify-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="bg-lime text-black border-2 border-lime px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:bg-transparent hover:text-black"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default PopularKits;
