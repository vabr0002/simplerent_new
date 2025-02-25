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
  FaMicrophone,
  FaLightbulb,
  FaVideo,
  FaGripHorizontal,
  FaPlug,
  FaBoxOpen,
} from "react-icons/fa";
import { BsGearWideConnected } from "react-icons/bs";

const Navigation = () => {
  // Toolbox open/close state
  const [isToolboxOpen, setIsToolboxOpen] = useState(false);

  // Which toolbox icon is selected
  const [selectedToolboxItem, setSelectedToolboxItem] = useState(null);

  // Which category index is hovered (sub-menu open)
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const iconClasses =
    "text-3xl text-white group-hover:text-lime transition-colors duration-200";
  const linkClasses =
    "group text-p font-light hover:text-lime py-2 px-4 w-full h-16 text-center " +
    "flex flex-col items-center justify-center whitespace-nowrap select-none relative";

  // Toggles which toolbox item is open
  const handleIconClick = (item) => {
    setSelectedToolboxItem((prev) => (prev === item ? null : item));
  };

  // Category definitions
  const categories = [
    {
      name: "Kits",
      icon: <FaBoxOpen className={iconClasses} />,
      submenu: ["Basic Kit", "Advanced Kit", "Pro Kit", "Custom Kit"],
    },
    {
      name: "Camera & Accessories",
      icon: <FaCamera className={iconClasses} />,
      submenu: [
        "Cameras",
        "Lenses",
        "Tripods",
        "Donuts",
        "Stabilizers",
        "Batteries",
        "Memory Cards",
        "Cases",
      ],
    },
    {
      name: "Audio",
      icon: <FaMicrophone className={iconClasses} />,
      submenu: [
        "Microphones",
        "Recorders",
        "Mixers",
        "Headphones",
        "Wireless Systems",
      ],
    },
    {
      name: "Lighting, Sfx & Stands",
      icon: <FaLightbulb className={iconClasses} />,
      submenu: [
        "LED Panels",
        "Fresnel",
        "Modifiers",
        "Light Stands",
        "Special Effects",
      ],
    },
    {
      name: "Live Production",
      icon: <FaVideo className={iconClasses} />,
      submenu: ["Switchers", "Streaming", "Monitors", "Teleprompters"],
    },
    {
      name: "Monitors & Recorders",
      icon: <FaVideo className={iconClasses} />,
      submenu: ["Field Monitors", "External Recorders", "Directors Monitors"],
    },
    {
      name: "Grips & Gadgets",
      icon: <FaGripHorizontal className={iconClasses} />,
      submenu: ["Clamps", "Arms", "Rigs", "Sliders", "Dollies"],
    },
    {
      name: "Cables & Adapters",
      icon: <FaPlug className={iconClasses} />,
      submenu: ["Power Cables", "HDMI", "SDI", "XLR", "USB", "Adapters"],
    },
    {
      name: "Production & Consumables",
      icon: <FaBoxOpen className={iconClasses} />,
      submenu: [
        "Gaffer Tape",
        "Markers",
        "Batteries",
        "Gels",
        "Cleaning Supplies",
      ],
    },
  ];

  // Decide sub-menu alignment
  const getSubmenuPosition = (index) => {
    const total = categories.length;
    if (index >= total - 3) {
      // last third => align right
      return "right-0";
    } else if (index >= Math.floor(total / 3) && index < total - 3) {
      // middle => center
      return "left-1/2 -translate-x-1/2";
    } else {
      // first third => align left
      return "left-0";
    }
  };

  return (
    // Sticky top, partial transparency
    <nav className="sticky top-0 z-50 w-full flex flex-col items-center bg-transparent select-none">
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

        {/* LOGO -> Home */}
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

          {/* Gear Icon (toolbox toggle) */}
          <div
            className={`relative p-4 w-10 h-10 flex items-center justify-center rounded-xl hover:scale-110 
                        transition-transform duration-300 cursor-pointer select-none ${
                          isToolboxOpen
                            ? "bg-lime text-black"
                            : "bg-white text-black hover:bg-lime"
                        }`}
            onClick={() => {
              setIsToolboxOpen(!isToolboxOpen);
              if (isToolboxOpen) setSelectedToolboxItem(null);
            }}
          >
            <BsGearWideConnected className="absolute text-black text-xl" />
          </div>
        </div>
      </div>

      {/* Category Menu (transparent). ADDED flex-wrap + justify-center for responsiveness */}
      <div className="flex flex-row flex-wrap justify-center w-full pt-2 bg-black/50 font-helvetica select-none">
        {categories.map((cat, index, arr) => (
          <div
            key={index}
            className="relative shrink-0"
            onMouseEnter={() => setActiveSubmenu(index)}
            onMouseLeave={() => setActiveSubmenu(null)}
          >
            <Link
              href=""
              className={`${linkClasses} ${
                index < arr.length - 1 ? "border-r border-gray-400" : ""
              }`}
            >
              {cat.icon}
              <span className="text-center leading-tight text-xs sm:text-sm md:text-base lg:text-lg overflow-hidden text-ellipsis text-white">
                {cat.name}
              </span>
            </Link>

            {/* Submenu on hover */}
            {activeSubmenu === index && (
              <div
                className={`absolute top-full ${getSubmenuPosition(index)} bg-black/50 text-white p-2 rounded-b-md w-max z-20`}
              >
                <div className="grid grid-cols-2 gap-2">
                  {cat.submenu.map((item, idx) => (
                    <Link
                      key={idx}
                      href=""
                      className="whitespace-nowrap text-sm px-4 py-2 hover:bg-lime hover:text-black rounded-md transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Toolbox area (gear icon) */}
      <div
        className={`absolute right-1 top-full mt-1 transition-all duration-300 z-20 ${
          isToolboxOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <div className="bg-black text-white p-4 rounded-lg shadow-lg flex">
          {/* Left Content Panel */}
          {selectedToolboxItem && (
            <div className="mr-4 w-56">
              {/* Calendar */}
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

              {/* User/Login */}
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

              {/* Heart */}
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

              {/* Cart */}
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

              {/* Contact */}
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

          {/* Icons (right) */}
          <div className="grid grid-cols-1 gap-3">
            {/* Calendar */}
            <button
              onClick={() => handleIconClick("calendar")}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-md hover:bg-lime transition select-none"
            >
              <FaCalendarAlt className="text-black text-xl" />
            </button>

            {/* User */}
            <button
              onClick={() => handleIconClick("user")}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-md hover:bg-lime transition select-none"
            >
              <FaUser className="text-black text-xl" />
            </button>

            {/* Heart */}
            <button
              onClick={() => handleIconClick("heart")}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-md hover:bg-lime transition select-none"
            >
              <FaHeart className="text-black text-xl" />
            </button>

            {/* Cart */}
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
