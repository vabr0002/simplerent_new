"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

function Hero() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="relative h-[85vh]">
      {/* Background Image */}
      <div className="relative w-full h-full">
        <Image
          src="/img/hero.webp"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        {/* Title + Search */}
        <div className="flex items-center justify-center w-full">
          <div className="text-h1 font-bold mr-4 flex flex-col justify-start items-start">
            <span>Keeping film rental</span>
            <div className="w-full flex justify-end">
              <span className="text-lime">Simple.</span>
            </div>
          </div>

          {/* Search Bar med Smooth Animation */}
          <div
            ref={searchRef}
            className={`flex items-center bg-white text-black overflow-hidden transition-all duration-500 ease-in-out ${
              isSearchOpen
                ? "w-96 h-[45px] rounded-full"
                : "w-[130px] h-[100px] rounded-r-full"
            }`}
            onClick={openSearch}
          >
            <input
              type="text"
              placeholder="Search..."
              className={`p-2 outline-none transition-all duration-300 ${
                isSearchOpen ? "opacity-100 w-full pl-4" : "opacity-0 w-0"
              }`}
            />
            <div
              className={`flex items-center justify-center transition-all duration-500 ease-in-out ${
                isSearchOpen ? "p-2" : "w-full h-full"
              }`}
            >
              <FaSearch
                className={`text-black transition-all duration-500 ease-in-out ${
                  isSearchOpen
                    ? "text-xl translate-x-0"
                    : "text-3xl translate-x-[-8px]"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 flex justify-center space-x-4">
          {[
            "Cashback for returning customers",
            "Build in tools for planning",
            "24/7 instant booking"
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 text-white border-x-4 border-y-4 rounded-lg flex flex-col items-center justify-center p-4 w-[110px] h-[120px] transform hover:scale-105 hover:translate-y-[-3px] transition duration-300 ease-in-out"
            >
              {/* Example SVG Icons */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white mb-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {index === 0 && (
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                )}
                {index === 1 && (
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                )}
                {index === 2 && (
                  <>
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </>
                )}
              </svg>
              <p className="text-center text-xs">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
