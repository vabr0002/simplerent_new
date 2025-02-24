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
  FaExclamationCircle
} from "react-icons/fa";
import { BsGearWideConnected } from "react-icons/bs";

const Navigation = () => {
  // Toolbox open/close state
  const [isToolboxOpen, setIsToolboxOpen] = useState(false);

  // Track which toolbox icon is selected ("calendar", "user", "heart", etc.)
  const [selectedToolboxItem, setSelectedToolboxItem] = useState(null);

  const iconClasses =
    "text-3xl text-white group-hover:text-lime transition-colors duration-200";
  const linkClasses =
    "group text-p font-light hover:text-lime py-2 px-4 w-full h-16 text-center flex flex-col items-center justify-center whitespace-nowrap select-none";

  // Handle toggling an icon's content
  // If the same icon is clicked again, close it (set to null)
  const handleIconClick = (item) => {
    setSelectedToolboxItem((prev) => (prev === item ? null : item));
  };

  return (
    <nav className="sticky top-0 z-50 flex flex-col items-center w-full bg-black select-none">
      {/* Top Navigation */}
      <div className="flex justify-between items-center w-full p-3 bg-black text-white">
        <div className="flex gap-6 ml-4">
          <Link className="text-h4 hover:text-lime" href="/pages/howItWorks">
            How it works
          </Link>
          <Link className="text-h4 hover:text-lime" href="/pages/learn">
            Learn
          </Link>
        </div>

        {/* Wrap LOGO in Link to home */}
        <div>
          <Link href="/">
            <h1>LOGO</h1>
          </Link>
        </div>

        <div className="flex gap-6 mr-4 relative">
          {/* Search Icon */}
          <div
            className="relative bg-white text-black p-4 w-10 h-10 flex items-center justify-center 
                        rounded-xl hover:scale-110 transition-transform duration-300 cursor-pointer 
                        hover:bg-lime select-none"
          >
            <FaSearch className="absolute text-black text-xl" />
          </div>

          {/* Gear Icon - Turns Lime When Active */}
          <div
            className={`relative p-4 w-10 h-10 flex items-center justify-center rounded-xl hover:scale-110 
                        transition-transform duration-300 cursor-pointer select-none ${
                          isToolboxOpen
                            ? "bg-lime text-black"
                            : "bg-white text-black hover:bg-lime"
                        }`}
            onClick={() => {
              setIsToolboxOpen(!isToolboxOpen);
              // (Optional) reset the selected tool if we’re closing the entire toolbox
              if (isToolboxOpen) setSelectedToolboxItem(null);
            }}
          >
            <BsGearWideConnected className="absolute text-black text-xl" />
          </div>
        </div>
      </div>

      {/* Category Menu */}
      <div className="flex flex-row w-full pt-2 bg-opacity-80 font-helvetica select-none">
        {[
          "Kits",
          "Camera & Accessories",
          "Audio",
          "Lighting, Sfx & Stands",
          "Live Production",
          "Monitors & Recorders",
          "Grips & Gadgets",
          "Cables & Adapters",
          "Production & Consumables"
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

      {/* Floating Toolbox */}
      <div
        className={`absolute right-1 top-full mt-1 transition-all duration-300 z-20 ${
          isToolboxOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <div className="bg-black text-white p-4 rounded-lg shadow-lg flex">
          {/* Content panel (on the left) - only if an icon is selected */}
          {selectedToolboxItem && (
            <div className="mr-4 w-56">
              {selectedToolboxItem === "calendar" && (
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold">Select Dates</h2>
                  <label>
                    Start Date
                    <input
                      type="date"
                      className="text-black block w-full mt-1"
                    />
                  </label>
                  <label>
                    End Date
                    <input
                      type="date"
                      className="text-black block w-full mt-1"
                    />
                  </label>
                  <div className="flex gap-2 mt-2">
                    <button className="bg-white text-black px-3 py-1 rounded-md hover:bg-lime">
                      Cancel
                    </button>
                    <button className="bg-lime text-black px-3 py-1 rounded-md hover:opacity-90">
                      Apply
                    </button>
                  </div>
                </div>
              )}

              {selectedToolboxItem === "user" && (
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold">Login</h2>
                  <label>
                    Email
                    <input
                      type="email"
                      className="text-black block w-full mt-1"
                    />
                  </label>
                  <label>
                    Password
                    <input
                      type="password"
                      className="text-black block w-full mt-1"
                    />
                  </label>
                  <button className="bg-lime text-black px-3 py-1 rounded-md hover:opacity-90 mt-2">
                    Submit
                  </button>
                </div>
              )}

              {selectedToolboxItem === "heart" && (
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold">Liked Items</h2>
                  <ul className="list-disc list-inside text-sm">
                    <li>Item #1</li>
                    <li>Item #2</li>
                    <li>Item #3</li>
                  </ul>
                </div>
              )}

              {selectedToolboxItem === "cart" && (
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold">Cart Settings</h2>
                  <p className="text-sm">Create or delete custom carts here.</p>
                  <button className="bg-lime text-black px-3 py-1 rounded-md hover:opacity-90">
                    Create New Cart
                  </button>
                  <ul className="list-disc list-inside text-sm mt-2">
                    <li>Cart #1</li>
                    <li>Cart #2</li>
                  </ul>
                </div>
              )}

              {selectedToolboxItem === "contact" && (
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold">Contact Us</h2>
                  <label>
                    Name
                    <input
                      type="text"
                      className="text-black block w-full mt-1"
                    />
                  </label>
                  <label>
                    Message
                    <textarea
                      className="text-black block w-full mt-1"
                      rows="3"
                    />
                  </label>
                  <button className="bg-lime text-black px-3 py-1 rounded-md hover:opacity-90 mt-2">
                    Send
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Icons column (on the right) */}
          <div className="grid grid-cols-1 gap-3">
            {/* Booking Date */}
            <button
              onClick={() => handleIconClick("calendar")}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-md hover:bg-lime transition select-none"
            >
              <FaCalendarAlt className="text-black text-xl" />
            </button>

            {/* Profile */}
            <button
              onClick={() => handleIconClick("user")}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-md hover:bg-lime transition select-none"
            >
              <FaUser className="text-black text-xl" />
            </button>

            {/* Liked Equipment */}
            <button
              onClick={() => handleIconClick("heart")}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-md hover:bg-lime transition select-none"
            >
              <FaHeart className="text-black text-xl" />
            </button>

            {/* Shopping Cart */}
            <button
              onClick={() => handleIconClick("cart")}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-md hover:bg-lime transition select-none"
            >
              <FaShoppingCart className="text-black text-xl" />
            </button>

            {/* Contact */}
            <button
              onClick={() => handleIconClick("contact")}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-md hover:bg-lime transition select-none"
            >
              <FaExclamationCircle className="text-black text-xl" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
