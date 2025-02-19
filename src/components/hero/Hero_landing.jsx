"use client";
import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/img/hero.webp" // Replace with your image path
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="brightness-50" // This reduces the brightness for a darker overlay effect
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl font-bold text-lime-400">
          Keeping film rental simple.
        </h1>

        {/* Search Bar */}
        <div className="mt-4 flex items-center bg-white text-black rounded-full overflow-hidden w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 outline-none"
          />
          <button className="bg-white p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z"
              />
            </svg>
          </button>
        </div>

        {/* Features */}
        <div className="mt-8 flex justify-center space-x-4">
          <div className="bg-white bg-opacity-20 text-white p-4 rounded-lg flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <p className="mt-2">Cashback for returning customers</p>
          </div>
          <div className="bg-white bg-opacity-20 text-white p-4 rounded-lg flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
            <p className="mt-2">Build in tools for planning</p>
          </div>
          <div className="bg-white bg-opacity-20 text-white p-4 rounded-lg flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
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
            <p className="mt-2">24/7 instant booking</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
