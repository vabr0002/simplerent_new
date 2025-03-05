"use cilent";

import React, { useState } from "react";

const Filter = () => {
  // Sample category data for checkboxes (10 total)
  const categories = [
    "Cameras",
    "Lenses",
    "Lighting",
    "Audio",
    "Tripods",
    "Drones",
    "Gimbals",
    "Batteries",
    "Monitors",
    "Accessories",
  ];

  // State to toggle showing all categories or just the first 5
  const [showAllCategories, setShowAllCategories] = useState(false);

  // Categories to display: either first 5 or all 10 based on state
  const displayedCategories = showAllCategories
    ? categories
    : categories.slice(0, 5);

  return (
    <div className="w-[350px] h-auto bg-white p-6 rounded-lg shadow-md border border-zinc-700">
      {/* Filter Title with Underline */}
      <h2 className="text-2xl font-bold text-black mb-2">Filter</h2>
      <div className="w-full h-[2px] bg-black mb-6"></div>

      {/* Categories Section */}
      <h3 className="text-lg font-semibold text-black mb-3">Categories</h3>
      <div className="space-y-2">
        {/* Dynamic Checkboxes */}
        {displayedCategories.map((category, index) => (
          <label key={index} className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4 accent-lime text-black border-gray-300 rounded"
            />
            <span className="text-black">{category}</span>
          </label>
        ))}
        {/* Show More / Show Less Toggle */}
        <p
          className="text-sm text-black cursor-pointer hover:underline"
          onClick={() => setShowAllCategories(!showAllCategories)}
        >
          {showAllCategories ? "Show Less" : "Show More"}
        </p>
      </div>

      {/* Price Range Section */}
      <h3 className="text-lg font-semibold text-black mt-6 mb-3">
        Price Range
      </h3>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="From"
          className="w-1/2 p-2 border border-gray-300 rounded-md text-black placeholder-gray-400 
               focus:outline-none focus:ring-2 focus:ring-lime focus:border-lime selection:bg-lime selection:text-black"
        />
        <input
          type="text"
          placeholder="To"
          className="w-1/2 p-2 border border-gray-300 rounded-md text-black placeholder-gray-400 
               focus:outline-none focus:ring-2 focus:ring-lime focus:border-lime selection:bg-lime selection:text-black"
        />
      </div>

      {/* Status Section */}
      <h3 className="text-lg font-semibold text-black mt-6 mb-3">Status</h3>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 h-4 w-4 text-black accent-lime border-gray-300 rounded"
        />
        <span className="text-black">In Stock</span>
      </label>
    </div>
  );
};

export default Filter;
