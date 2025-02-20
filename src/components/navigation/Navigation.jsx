"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaCamera,
  FaCalendarAlt,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaExclamationCircle,
} from "react-icons/fa";
import { BsGearWideConnected } from "react-icons/bs";

const Navigation = () => {
  const [isToolboxOpen, setIsToolboxOpen] = useState(false);

  const iconClasses =
    "text-3xl text-white group-hover:text-lime transition-colors duration-200";
  const linkClasses =
    "group text-p font-light hover:text-lime py-2 px-4 w-full h-16 text-center flex flex-col items-center justify-center whitespace-nowrap";

  return (
    <nav className="flex flex-col items-center relative w-full">
      {/* Top Navigation */}
      <div className="flex justify-between items-center w-full p-3 bg-black text-white">
        <div className="flex gap-6 ml-4">
          <Link className="text-h4 hover:text-lime" href="">
            How it works
          </Link>
          <Link className="text-h4 hover:text-lime" href="">
            Learn
          </Link>
        </div>
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="flex gap-6 mr-4 relative">
          {/* Search Icon - Stays White */}
          <div className="relative bg-white text-black p-4 w-10 h-10 flex items-center justify-center rounded-xl hover:scale-110 transition-transform duration-300 cursor-pointer hover:bg-lime">
            <FaSearch className="absolute text-black text-xl" />
          </div>

          {/* Gear Icon - Turns Lime When Active */}
          <div
            className={`relative p-4 w-10 h-10 flex items-center justify-center rounded-xl hover:scale-110 transition-transform duration-300 cursor-pointer ${
              isToolboxOpen
                ? "bg-lime text-black"
                : "bg-white text-black hover:bg-lime"
            }`}
            onClick={() => setIsToolboxOpen(!isToolboxOpen)}
          >
            <BsGearWideConnected className="absolute text-black text-xl" />
          </div>

          {/* Floating Toolbox */}
          {isToolboxOpen && (
            <div className="absolute right-0 top-16 bg-black text-white p-4 rounded-lg shadow-lg transition-all duration-300 z-20 w-16">
              <div className="grid grid-cols-1 gap-3">
                {/* Booking Date */}
                <button className="flex flex-col items-center p-2 bg-white rounded-md hover:bg-lime transition">
                  <FaCalendarAlt className="text-black text-xl" />
                </button>

                {/* Profile */}
                <button className="flex flex-col items-center p-2 bg-white rounded-md hover:bg-lime transition">
                  <FaUser className="text-black text-xl" />
                </button>

                {/* Liked Equipment */}
                <button className="flex flex-col items-center p-2 bg-white rounded-md hover:bg-lime transition">
                  <FaHeart className="text-black text-xl" />
                </button>

                {/* Shopping Cart */}
                <button className="flex flex-col items-center p-2 bg-white rounded-md hover:bg-lime transition">
                  <FaShoppingCart className="text-black text-xl" />
                </button>

                {/* Contact */}
                <button className="flex flex-col items-center p-2 bg-white rounded-md hover:bg-lime transition">
                  <FaExclamationCircle className="text-black text-xl" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Category Menu */}
      <div className="flex flex-row w-full pt-2 bg-opacity-80 font-helvetica">
        {[
          "Kits",
          "Camera & Accessories",
          "Audio",
          "Lighting, Sfx & Stands",
          "Live Production",
          "Monitors & Recorders",
          "Grips & Gadgets",
          "Cables & Adapters",
          "Production & Consumables",
        ].map((item, index, array) => (
          <Link
            key={index}
            className={`${linkClasses} ${
              index < array.length - 1 ? "border-r border-gray-400" : ""
            }`}
            href=""
          >
            <FaCamera className={iconClasses} />
            <span className="text-center leading-tight text-xs sm:text-sm md:text-base lg:text-lg overflow-hidden text-ellipsis">
              {item}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
