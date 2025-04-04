"use client"; // Indicates this is a client-side component in Next.js

import React, { useState, useEffect } from "react"; // Core React hooks
import Card from "../kitCard/KitCard"; // Custom Card component for displaying kits
import Link from "next/link"; // Import Link for navigation

const PopularKits = () => {
  // Array of kit objects with basic data
  const kits = [
    { id: 1, title: "Starter Kit", description: "Perfect for beginners" },
    { id: 2, title: "Professional Kit", description: "For the pros" },
    { id: 3, title: "Video Kit", description: "All-in-one video solution" },
    { id: 4, title: "Audio Kit", description: "For sound professionals" },
    { id: 5, title: "Lighting Kit", description: "Illuminate your scene" },
    { id: 6, title: "Action Kit", description: "For dynamic shoots" },
  ];

  // State to track if the screen size is mobile (below 640px)
  const [isMobile, setIsMobile] = useState(false);

  // Effect to detect screen size and update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Matches Tailwind's 'sm' breakpoint
    };

    // Set initial value on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Cleanup: remove listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this runs only on mount/unmount

  // Determine which kits to display: 3 on mobile, all on desktop
  const displayedKits = isMobile ? kits.slice(0, 3) : kits;

  return (
    // Section container with white background and padding
    <section className="bg-white py-10 pb-24">
      {/* Section title */}
      <h2 className="text-center text-h1 font-bold mt-8 mb-8 text-black">
        Most Rented Kits
      </h2>
      {/* Grid layout for kit cards, responsive with 1 column on mobile, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto max-w-screen-xl px-4">
        {displayedKits.map((kit) => (
          // Render a Card component for each kit
          <Card
            key={kit.id}
            title={kit.title}
            description={kit.description}
            buttonText="Rent Now"
            buttonLink="pages/kitPage"
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
      {/* "See All Kits" link, visible only on mobile */}
      {kits.length > 3 && (
        <div className="sm:hidden flex justify-center mt-6">
          <Link
            href="/kitPage"
            className="bg-lime text-black border-2 border-lime px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:bg-transparent hover:text-black"
          >
            See All Kits
          </Link>
        </div>
      )}
    </section>
  );
};

export default PopularKits;
