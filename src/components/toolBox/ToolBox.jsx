"use client";
import React from "react";
import {
  FaCalendarAlt,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaExclamationCircle,
} from "react-icons/fa";

const ToolBox = ({ isOpen }) => {
  return (
    <div
      className={`absolute w-full bg-black text-white py-4 transition-all duration-300 z-20 shadow-md ${
        isOpen
          ? "top-full opacity-100"
          : "-top-96 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-center space-x-6">
        {/* Booking Date */}
        <button className="flex flex-col items-center p-3 hover:text-lime">
          <FaCalendarAlt className="text-2xl" />
          <span className="text-xs mt-1">Booking</span>
        </button>

        {/* Profile */}
        <button className="flex flex-col items-center p-3 hover:text-lime">
          <FaUser className="text-2xl" />
          <span className="text-xs mt-1">Profile</span>
        </button>

        {/* Liked Equipment */}
        <button className="flex flex-col items-center p-3 hover:text-lime">
          <FaHeart className="text-2xl" />
          <span className="text-xs mt-1">Favorites</span>
        </button>

        {/* Shopping Cart */}
        <button className="flex flex-col items-center p-3 hover:text-lime">
          <FaShoppingCart className="text-2xl" />
          <span className="text-xs mt-1">Cart</span>
        </button>

        {/* Contact */}
        <button className="flex flex-col items-center p-3 hover:text-lime">
          <FaExclamationCircle className="text-2xl" />
          <span className="text-xs mt-1">Contact</span>
        </button>
      </div>
    </div>
  );
};

export default ToolBox;
