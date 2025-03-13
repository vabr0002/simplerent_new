"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaSearch, FaPlane } from "react-icons/fa";

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
    <section className="relative h-[95vh] -mt-[75px]">
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
        {/* Title + Search - Positioned at the top */}
        <div className="flex flex-col items-center md:items-center md:flex-row md:justify-center w-full">
          <div className="text-4xl md:text-h1 font-bold md:mr-4 flex flex-col justify-start items-center md:items-start mb-6 md:mb-0">
            <span>Keeping film rental</span>
            <div className="w-full flex justify-center md:justify-end">
              <span className="text-lime">Simple.</span>
            </div>
          </div>

          {/* Search Bar med Smooth Animation */}
          <div
            ref={searchRef}
            className={`flex items-center bg-white text-black overflow-hidden 
                        transition-all duration-500 ease-in-out 
                        ${
                          isSearchOpen
                            ? "w-full md:w-96 h-[45px] rounded-full"
                            : "w-[100px] md:w-[130px] h-[60px] md:h-[100px] rounded-full md:rounded-l-none md:rounded-r-full"
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
                    : "text-2xl md:text-3xl translate-x-0 md:translate-x-[-8px]"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Features - Adjusted positioning for mobile */}
        <div className="absolute bottom-20 md:bottom-20 left-0 right-0">
          <div className="flex flex-wrap justify-center gap-3 px-4 md:hidden">
            {[
              "Cashback for returning customers",
              "Build in tools for planning",
              "24/7 instant booking",
              "Only 11 min from CPH Airport"
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-20 text-white border-2 rounded-xl 
                          flex flex-col items-center justify-center p-2
                          w-[100px] h-[105px]
                          transform hover:scale-105 hover:translate-y-[-3px] 
                          transition duration-300 ease-in-out"
              >
                {/* Icons for each feature */}
                {index === 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white mb-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                )}
                {index === 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white mb-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                  </svg>
                )}
                {index === 2 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white mb-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                )}
                {index === 3 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white mb-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                  </svg>
                )}

                <p className="text-center text-[10px]">{feature}</p>
              </div>
            ))}
          </div>

          {/* Desktop features - Unchanged */}
          <div className="hidden md:flex justify-center space-x-4">
            {[
              "Cashback for returning customers",
              "Build in tools for planning",
              "24/7 instant booking",
              "Only 11 min from CPH Airport"
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-20 text-white border-2 rounded-xl 
                         flex flex-col items-center justify-center p-4 w-[110px] h-[110px] 
                         transform hover:scale-105 hover:translate-y-[-3px] 
                         transition duration-300 ease-in-out"
              >
                {/* Icons for each feature */}
                {index === 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-lime mb-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                )}
                {index === 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-lime mb-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                  </svg>
                )}
                {index === 2 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-lime mb-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                )}
                {index === 3 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-lime mb-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                  </svg>
                )}

                <p className="text-center text-xs">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
