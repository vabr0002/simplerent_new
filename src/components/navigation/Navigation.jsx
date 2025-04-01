"use client"; // Indicates this is a client-side component in Next.js

import React, { useState, useEffect, useRef } from "react"; // Core React hooks
import Image from "next/image"; // Optimized image component from Next.js
import Link from "next/link"; // Next.js Link for client-side navigation
import { usePathname } from "next/navigation"; // Hook to get current URL path
import {
  FaSearch,
  FaCamera,
  FaCalendarAlt,
  FaUser,
  FaExclamationCircle,
  FaMicrophone,
  FaLightbulb,
  FaVideo,
  FaGripHorizontal,
  FaPlug,
  FaBoxOpen,
  FaEnvelope,
  FaFolderOpen,
  FaGlobe
} from "react-icons/fa"; // Icons from react-icons

// Import the calendar store for managing booking dates
import useCalendarStore from "@/store/calendarStore";

// Contact Form Component (unchanged from original)
const ContactForm = ({ closeToolbox }) => {
  // State for form inputs and validation warning
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  // Handle form submission
  const handleSend = () => {
    if (!name || !email || !message) {
      setShowWarning(true); // Show warning if fields are empty
      return;
    }
    setShowWarning(false); // Clear warning on successful submission
    closeToolbox(); // Close toolbox after sending
  };

  return (
    // Contact form layout
    <div className="flex flex-col gap-2">
      <h2 className="font-bold">Contact Us</h2>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-black block w-full mt-1 px-2 py-1 rounded"
        />
      </label>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black block w-full mt-1 px-2 py-1 rounded"
        />
      </label>
      <label>
        Message
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="text-black block w-full mt-1 px-2 py-1 rounded"
          rows="3"
        ></textarea>
      </label>
      {/* Warning message for incomplete form */}
      {showWarning && (
        <div className="bg-red-500/20 border border-red-500 text-red-100 p-2 rounded text-sm mt-1">
          Please fill out all fields before sending.
        </div>
      )}
      <button
        className="bg-lime text-black px-3 py-1 rounded-md hover:opacity-90 mt-2"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

const Navigation = () => {
  // State variables for controlling navigation UI
  const [isToolboxOpen, setIsToolboxOpen] = useState(false); // Toolbox visibility
  const [selectedToolboxItem, setSelectedToolboxItem] = useState(null); // Selected toolbox item
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Active category submenu
  const [isCategoryVisible, setIsCategoryVisible] = useState(true); // Category row visibility
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Search bar visibility
  const [activeProject, setActiveProject] = useState("Studio Setup"); // Active project in toolbox
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu visibility
  const [isLanguageOpen, setIsLanguageOpen] = useState(false); // Language dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Selected language

  const pathname = usePathname(); // Current URL path
  const lastScrollPosRef = useRef(0); // Ref to track last scroll position

  // Calendar store state and functions for booking management
  const {
    bookingPeriod,
    setBookingPeriod,
    clearBookingPeriod,
    isValidBooking
  } = useCalendarStore();

  // List of supported languages for the language toggle
  const languages = [
    { code: "en", name: "English" },
    { code: "da", name: "Danish" },
    { code: "es", name: "Spanish" }
  ];

  // Effect to handle clicks outside mobile menu and language dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close mobile menu if click is outside
      if (isMobileMenuOpen) {
        const mobileMenu = document.getElementById("mobile-menu-content");
        const burgerButton = document.getElementById("burger-button");
        if (
          mobileMenu &&
          !mobileMenu.contains(event.target) &&
          burgerButton &&
          !burgerButton.contains(event.target)
        ) {
          setIsMobileMenuOpen(false);
        }
      }
      // Close language dropdown if click is outside
      if (isLanguageOpen) {
        const langToggle = document.getElementById("language-toggle");
        if (langToggle && !langToggle.contains(event.target)) {
          setIsLanguageOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen, isLanguageOpen]);

  // Effect to reset mobile menu and language dropdown on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLanguageOpen(false);
  }, [pathname]);

  // Effect to hide/show category row based on scroll direction
  useEffect(() => {
    if (pathname === "/pages/projects") {
      setIsCategoryVisible(true); // Always show on projects page
      return;
    }
    lastScrollPosRef.current = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsCategoryVisible(currentScroll < lastScrollPosRef.current); // Show if scrolling up
      lastScrollPosRef.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Toggle selected toolbox item
  const handleIconClick = (item) => {
    setSelectedToolboxItem((prev) => (prev === item ? null : item));
  };

  // Close the toolbox and reset selected item
  const closeToolbox = () => {
    setIsToolboxOpen(false);
    setSelectedToolboxItem(null);
  };

  // Handle language selection
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
    // TODO: Implement actual language change logic here
  };

  // Common classes for icons and links
  const iconClasses =
    "text-3xl text-white group-hover:text-lime transition-colors duration-200";
  const linkClasses =
    "group text-h4 font-light hover:text-lime py-2 px-4 w-full h-16 text-center " +
    "flex flex-col items-center justify-center whitespace-nowrap select-none relative";

  // Category data with icons and submenus
  const categories = [
    {
      name: "Kits",
      icon: <FaBoxOpen className={iconClasses} />,
      submenu: ["Basic Kit", "Advanced Kit", "Pro Kit", "Custom Kit"]
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
        "Cases"
      ]
    },
    {
      name: "Audio",
      icon: <FaMicrophone className={iconClasses} />,
      submenu: [
        "Microphones",
        "Recorders",
        "Mixers",
        "Headphones",
        "Wireless Systems"
      ]
    },
    {
      name: "Lighting, Sfx & Stands",
      icon: <FaLightbulb className={iconClasses} />,
      submenu: [
        "LED Panels",
        "Fresnel",
        "Modifiers",
        "Light Stands",
        "Special Effects"
      ]
    },
    {
      name: "Live Production",
      icon: <FaVideo className={iconClasses} />,
      submenu: ["Switchers", "Streaming", "Monitors", "Teleprompters"]
    },
    {
      name: "Monitors & Recorders",
      icon: <FaVideo className={iconClasses} />,
      submenu: ["Field Monitors", "External Recorders", "Directors Monitors"]
    },
    {
      name: "Grips & Gadgets",
      icon: <FaGripHorizontal className={iconClasses} />,
      submenu: ["Clamps", "Arms", "Rigs", "Sliders", "Dollies"]
    },
    {
      name: "Cables & Adapters",
      icon: <FaPlug className={iconClasses} />,
      submenu: ["Power Cables", "HDMI", "SDI", "XLR", "USB", "Adapters"]
    },
    {
      name: "Production & Consumables",
      icon: <FaBoxOpen className={iconClasses} />,
      submenu: [
        "Gaffer Tape",
        "Markers",
        "Batteries",
        "Gels",
        "Cleaning Supplies"
      ]
    }
  ];

  // Calculate submenu position based on category index
  const getSubmenuPosition = (index) => {
    const total = categories.length;
    if (index >= total - 3)
      return "right-[-30px]"; // Right-aligned for last 3 items
    else if (index >= Math.floor(total / 3) && index < total - 3)
      return "left-1/2 -translate-x-[45%]"; // Centered for middle items
    else return "left-[-30px]"; // Left-aligned for first items
  };

  return (
    // Main navigation container with sticky positioning
    <nav className="sticky top-0 z-50 w-full bg-transparent select-none">
      <div className="flex flex-col w-full">
        {/* TOP NAV BAR */}
        <div className="relative w-full p-3 bg-black text-white flex items-center justify-between">
          {/* Mobile Burger Menu Button */}
          <div className="flex md:hidden">
            <button
              id="burger-button"
              className="text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <span className="text-2xl">✕</span> // Close icon
              ) : (
                <span className="text-2xl">☰</span> // Hamburger icon
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-6 ml-4">
            <Link
              className={`text-h4 ${
                pathname === "/" ? "text-lime" : "hover:text-lime"
              }`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`text-h4 ${
                pathname === "/pages/howItWorks"
                  ? "text-lime"
                  : "hover:text-lime"
              }`}
              href="/pages/howItWorks"
            >
              How it works
            </Link>
            <Link
              className={`text-h4 ${
                pathname === "/pages/learn" ? "text-lime" : "hover:text-lime"
              }`}
              href="/pages/learn"
            >
              Learn
            </Link>
          </div>

          {/* Logo (Centered) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <Link href="/">
              <Image src="/logo/logo.svg" width={150} height={50} alt="Logo" />
            </Link>
          </div>

          {/* TOP RIGHT ICONS */}
          <div className="flex gap-3 md:gap-6 mr-2 md:mr-4 ml-auto relative z-10">
            {/* Desktop Search Icon */}
            <div className="hidden md:flex">
              {isSearchOpen ? (
                // Expanded search bar
                <div className="flex items-center bg-white text-black h-10 px-3 rounded-xl transition-all duration-500 ease-in-out select-none w-64 opacity-100">
                  <FaSearch className="text-black text-xl mr-2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-white text-black outline-none w-full"
                  />
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="ml-2 text-black hover:text-lime transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                // Collapsed search icon
                <div
                  className="relative bg-white text-black p-4 w-10 h-10 flex items-center justify-center rounded-xl hover:scale-110 transition-transform duration-300 cursor-pointer hover:bg-lime select-none"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <FaSearch className="absolute text-black text-xl" />
                </div>
              )}
            </div>
            {/* Mobile Search Icon */}
            <div className="md:hidden">
              <div
                className="relative bg-white text-black p-4 w-8 h-8 flex items-center justify-center rounded-xl hover:scale-110 transition-transform duration-300 cursor-pointer hover:bg-lime select-none"
                onClick={() => setIsSearchOpen(true)}
              >
                <FaSearch className="absolute text-black text-lg" />
              </div>
            </div>

            {/* Language Toggle for Desktop */}
            <div id="language-toggle" className="hidden md:block relative">
              <div
                className="relative bg-white text-black p-4 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-xl hover:scale-110 transition-transform duration-300 cursor-pointer hover:bg-lime select-none"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <FaGlobe className="absolute text-black text-lg md:text-xl" />
              </div>
              {/* Language Dropdown */}
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-1 bg-black text-white rounded-md shadow-lg overflow-hidden z-50">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className={`px-4 py-2 cursor-pointer hover:bg-lime hover:text-black transition-colors whitespace-nowrap ${
                        selectedLanguage === lang.name ? "bg-lime/30" : ""
                      }`}
                      onClick={() => handleLanguageSelect(lang.name)}
                    >
                      {lang.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Globe Icon for Mobile (non-functional placeholder) */}
            <div className="block md:hidden">
              <div className="relative bg-white text-black p-4 w-8 h-8 flex items-center justify-center rounded-xl select-none">
                <FaGlobe className="absolute text-black text-lg" />
              </div>
            </div>

            {/* Toolbox Toggle Icon */}
            <div
              className={`relative p-4 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-xl hover:scale-110 transition-transform duration-300 cursor-pointer select-none ${
                isToolboxOpen
                  ? "bg-lime text-black"
                  : "bg-white text-black hover:bg-lime"
              }`}
              onClick={() => {
                setIsToolboxOpen(!isToolboxOpen);
                if (isToolboxOpen) setSelectedToolboxItem(null);
              }}
            >
              <FaExclamationCircle className="absolute text-black text-lg md:text-xl" />
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div
          className={`md:hidden w-full bg-black transition-all duration-300 ${
            isSearchOpen
              ? "max-h-16 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex items-center justify-center bg-white text-black h-12 px-4 mx-2 my-2 rounded-xl">
            <FaSearch className="text-black text-xl mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-white text-black outline-none w-full"
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="ml-2 text-black hover:text-lime transition-colors font-semibold"
            >
              Close
            </button>
          </div>
        </div>

        {/* Mobile Language Selector */}
        <div
          className={`md:hidden w-full bg-black transition-all duration-300 ${
            isLanguageOpen && !isSearchOpen
              ? "max-h-48 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col bg-black text-white mx-2 my-2 rounded-xl border border-white/20">
            <div className="p-2 border-b border-white/20">
              <h3 className="text-center font-medium">Select Language</h3>
            </div>
            {languages.map((lang) => (
              <div
                key={lang.code}
                className={`p-3 cursor-pointer hover:bg-lime hover:text-black transition-colors ${
                  selectedLanguage === lang.name ? "bg-lime/30" : ""
                }`}
                onClick={() => handleLanguageSelect(lang.name)}
              >
                {lang.name}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        <div
          className={`fixed inset-0 bg-black z-40 transition-all duration-300 pt-16 
          ${
            isMobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-lime p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="text-3xl">✕</span>
          </button>
          <div
            id="mobile-menu-content"
            className="flex flex-col h-full overflow-y-auto pointer-events-auto"
          >
            {/* Language Selection in Mobile Menu */}
            <div className="flex justify-center p-4 border-b border-gray-800">
              <div className="flex gap-2 justify-center">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      selectedLanguage === lang.name
                        ? "bg-lime text-black"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                    onClick={() => handleLanguageSelect(lang.name)}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col items-center gap-6 py-8 border-b border-gray-800">
              <Link
                className={`text-xl ${
                  pathname === "/" ? "text-lime" : "text-white hover:text-lime"
                }`}
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                className={`text-xl ${
                  pathname === "/pages/howItWorks"
                    ? "text-lime"
                    : "text-white hover:text-lime"
                }`}
                href="/pages/howItWorks"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it works
              </Link>
              <Link
                className={`text-xl ${
                  pathname === "/pages/learn"
                    ? "text-lime"
                    : "text-white hover:text-lime"
                }`}
                href="/pages/learn"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Learn
              </Link>
            </div>
            {/* Mobile Categories */}
            <div className="px-4 py-6 overflow-y-auto">
              <h2 className="text-lime text-lg font-bold mb-4 text-center">
                Categories
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {categories.map((cat, index) => (
                  <div key={index} className="border-b border-gray-800 pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      {React.cloneElement(cat.icon, {
                        className: "text-2xl text-white"
                      })}
                      <span className="text-white text-lg">{cat.name}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pl-8">
                      {cat.submenu.map((item, idx) => (
                        <Link
                          key={idx}
                          href="/pages/products"
                          className="text-gray-300 hover:text-lime text-sm py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY ROW - Desktop Only */}
        <div
          className={`hidden md:flex flex-row flex-wrap justify-center w-full bg-black/30 font-helvetica select-none
            transition-all duration-150 ${
              isCategoryVisible
                ? "max-h-32 opacity-100 pt-2"
                : "max-h-0 opacity-0"
            }`}
        >
          {categories.map((cat, index, arr) => (
            <div
              key={index}
              className="relative shrink-0"
              onMouseEnter={() => setActiveSubmenu(index)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                href="/pages/products"
                className={`${linkClasses} ${
                  index < arr.length - 1 ? "border-r border-gray-400" : ""
                }`}
              >
                {React.cloneElement(cat.icon, {
                  className:
                    cat.icon.props.className +
                    (activeSubmenu === index ? " text-lime" : "")
                })}
                <span className="text-center leading-tight text-xs sm:text-sm md:text-base lg:text-lg overflow-hidden text-ellipsis text-white">
                  {cat.name}
                </span>
              </Link>
              {/* Submenu Dropdown */}
              {activeSubmenu === index && (
                <div
                  className={`absolute top-full ${getSubmenuPosition(
                    index
                  )} bg-black/30 text-white p-2 rounded-b-md w-max z-20`}
                >
                  <div className="grid grid-cols-2 gap-2">
                    {cat.submenu.map((item, idx) => (
                      <Link
                        key={idx}
                        href="/pages/products"
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
      </div>

      {/* TOOLBOX AREA */}
      <div
        className={`absolute md:right-1 top-full mt-1 transition-all duration-300 z-50 ${
          isToolboxOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        } md:w-auto w-screen`}
      >
        <div className="bg-black text-white p-4 rounded-none md:rounded-lg shadow-lg flex flex-col md:flex-row">
          {/* Toolbox Content */}
          <div className="w-full md:w-64 h-[280px] md:h-auto max-h-[350px] overflow-y-auto md:pr-1 mb-3 md:mb-0 md:mr-4">
            {selectedToolboxItem ? (
              <div className="h-full flex flex-col">
                {/* Calendar Tool */}
                {selectedToolboxItem === "calendar" && (
                  <div className="flex flex-col gap-2 h-full">
                    <h2 className="font-bold">Select Dates</h2>
                    <label>
                      Start Date
                      <input
                        type="date"
                        className="text-black block w-full mt-1 px-2 py-1 rounded"
                        value={bookingPeriod.start || ""}
                        onChange={(e) =>
                          setBookingPeriod(e.target.value, bookingPeriod.end)
                        }
                      />
                    </label>
                    <label>
                      End Date
                      <input
                        type="date"
                        className="text-black block w-full mt-1 px-2 py-1 rounded"
                        value={bookingPeriod.end || ""}
                        onChange={(e) =>
                          setBookingPeriod(bookingPeriod.start, e.target.value)
                        }
                      />
                    </label>
                    <div className="flex gap-2 mt-auto">
                      <button
                        className="bg-white text-black px-3 py-1 rounded-md hover:bg-lime"
                        onClick={() => {
                          clearBookingPeriod();
                          closeToolbox();
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-lime text-black px-3 py-1 rounded-md hover:opacity-90"
                        onClick={closeToolbox}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
                {/* User Tool */}
                {selectedToolboxItem === "user" && (
                  <div className="flex flex-col space-y-4 bg-black/80 rounded-lg h-full">
                    <h2 className="text-xl font-bold text-center text-lime mb-4">
                      Login
                    </h2>
                    <div className="flex flex-col items-center">
                      <div className="flex justify-center items-center w-full">
                        <Link
                          href="/pages/logIn"
                          className="w-full"
                          onClick={closeToolbox}
                        >
                          <button className="w-full bg-lime text-black px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                            Already have a user? Login
                          </button>
                        </Link>
                      </div>
                      <div className="my-4 flex items-center w-full">
                        <div className="flex-grow border-t border-gray-600"></div>
                        <span className="px-4 text-gray-400">OR</span>
                        <div className="flex-grow border-t border-gray-600"></div>
                      </div>
                      <div className="flex justify-center items-center w-full">
                        <Link
                          href="/pages/signUp"
                          className="w-full"
                          onClick={closeToolbox}
                        >
                          <button className="w-full bg-lime text-black px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                            Don't have a user? Sign Up Here
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                {/* Projects Tool */}
                {selectedToolboxItem === "projects" && (
                  <div className="flex flex-col gap-2 h-full">
                    <div className="flex justify-between items-center">
                      <h2 className="font-bold">Projects</h2>
                      <div className="bg-lime rounded-full px-2 py-0.5 text-black text-xs">
                        Active: {activeProject}
                      </div>
                    </div>
                    <p className="text-sm">
                      Create and manage your projects. Add items to projects and
                      transfer to cart when ready.
                    </p>
                    <div className="mt-2">
                      <label className="block text-sm font-medium mb-1">
                        Create New Project
                      </label>
                      <div className="flex gap-1">
                        <input
                          type="text"
                          placeholder="Project name"
                          className="text-black text-sm px-2 py-1 rounded flex-grow"
                        />
                        <button className="bg-lime text-black px-2 py-1 rounded-md hover:opacity-90 text-sm whitespace-nowrap">
                          Create
                        </button>
                      </div>
                    </div>
                    <div className="mt-2 overflow-y-auto flex-grow">
                      <h3 className="text-sm font-medium mb-1">
                        Your Projects
                      </h3>
                      <ul className="space-y-2 w-full">
                        <li
                          className={`rounded p-2 ${
                            activeProject === "Studio Setup"
                              ? "bg-lime/20 border border-lime"
                              : "bg-white/10"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm">
                              Studio Setup
                            </span>
                            <span className="text-xs">12 items</span>
                          </div>
                          <div className="flex gap-1 mt-1 justify-between">
                            <Link
                              href="/pages/projects"
                              className="bg-white/20 text-white text-xs px-2 py-1 rounded hover:bg-white/30 text-center"
                              onClick={closeToolbox}
                            >
                              View
                            </Link>
                            <div className="flex gap-1">
                              <button
                                onClick={() => setActiveProject("Studio Setup")}
                                className={`text-xs px-2 py-1 rounded ${
                                  activeProject === "Studio Setup"
                                    ? "bg-lime text-black"
                                    : "bg-white/20 text-white hover:bg-white/30"
                                }`}
                              >
                                Choose
                              </button>
                              <button
                                className="bg-white/20 text-white text-xs px-2 py-1 rounded hover:bg-white/30"
                                onClick={closeToolbox}
                              >
                                To Cart
                              </button>
                            </div>
                          </div>
                        </li>
                        <li
                          className={`rounded p-2 ${
                            activeProject === "Location Shoot"
                              ? "bg-lime/20 border border-lime"
                              : "bg-white/10"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm">
                              Location Shoot
                            </span>
                            <span className="text-xs">5 items</span>
                          </div>
                          <div className="flex gap-1 mt-1 justify-between">
                            <Link
                              href="/pages/projects"
                              className="bg-white/20 text-white text-xs px-2 py-1 rounded hover:bg-white/30 text-center"
                              onClick={closeToolbox}
                            >
                              View
                            </Link>
                            <div className="flex gap-1">
                              <button
                                onClick={() =>
                                  setActiveProject("Location Shoot")
                                }
                                className={`text-xs px-2 py-1 rounded ${
                                  activeProject === "Location Shoot"
                                    ? "bg-lime text-black"
                                    : "bg-white/20 text-white hover:bg-white/30"
                                }`}
                              >
                                Choose
                              </button>
                              <button
                                className="bg-white/20 text-white text-xs px-2 py-1 rounded hover:bg-white/30"
                                onClick={closeToolbox}
                              >
                                To Cart
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                {/* Contact Tool */}
                {selectedToolboxItem === "contact" && (
                  <ContactForm closeToolbox={closeToolbox} />
                )}
              </div>
            ) : (
              // Default message when no toolbox item is selected
              <div className="flex items-center justify-center h-full text-white/50">
                <p>Select an option</p>
              </div>
            )}
          </div>
          {/* Toolbox Icons */}
          <div className="grid grid-cols-4 md:grid-cols-1 gap-2 md:gap-3">
            <button
              onClick={() => handleIconClick("calendar")}
              className={`flex items-center justify-center w-full md:w-12 h-10 md:h-12 rounded-md transition select-none ${
                selectedToolboxItem === "calendar"
                  ? "bg-lime text-black"
                  : "bg-white text-black hover:bg-lime"
              }`}
            >
              <FaCalendarAlt className="text-lg md:text-xl" />
            </button>
            <button
              onClick={() => handleIconClick("user")}
              className={`flex items-center justify-center w-full md:w-12 h-10 md:h-12 rounded-md transition select-none ${
                selectedToolboxItem === "user"
                  ? "bg-lime text-black"
                  : "bg-white text-black hover:bg-lime"
              }`}
            >
              <FaUser className="text-lg md:text-xl" />
            </button>
            <button
              onClick={() => handleIconClick("projects")}
              className={`flex items-center justify-center w-full md:w-12 h-10 md:h-12 rounded-md transition select-none ${
                selectedToolboxItem === "projects"
                  ? "bg-lime text-black"
                  : "bg-white text-black hover:bg-lime"
              }`}
            >
              <FaFolderOpen className="text-lg md:text-xl" />
            </button>
            <button
              onClick={() => handleIconClick("contact")}
              className={`flex items-center justify-center w-full md:w-12 h-10 md:h-12 rounded-md transition select-none ${
                selectedToolboxItem === "contact"
                  ? "bg-lime text-black"
                  : "bg-white text-black hover:bg-lime"
              }`}
            >
              <FaEnvelope className="text-lg md:text-xl" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
