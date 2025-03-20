"use client";

import React, { useState } from "react";

const Filter = () => {
  // Main categories and subcategories based on provided structure
  const categories = [
    {
      name: "Kits",
      subcategories: [
        {
          name: "Content Type",
          items: [
            "Video",
            "Stills",
            "Lighting",
            "Interview",
            "Podcast",
            "Product Shoot",
            "Documentary"
          ]
        }
      ]
    },
    {
      name: "Cameras & Accessories",
      subcategories: [
        {
          name: "Accessories",
          items: [
            "Tripods",
            "Memory Cards",
            "Batteries / Charging",
            "Wireless Video",
            "Sliders & Motion",
            "Action Camera"
          ]
        },
        {
          name: "Lenses",
          items: [
            "Vintage Lenses",
            "Canon EF Mount",
            "Sony E Mount",
            "Lens Control",
            "Lens Adapters"
          ]
        }
      ]
    },
    {
      name: "Audio",
      subcategories: [
        {
          name: "Audio Equipment",
          items: [
            "Microphones",
            "Wireless Audio",
            "Recorder / Studio",
            "Boomkits",
            "Intercom",
            "Audio Accessories",
            "Speakers / PA"
          ]
        }
      ]
    },
    {
      name: "Lighting, SFX & Stands",
      subcategories: [
        {
          name: "Lights & Modifiers",
          items: [
            "Practicals",
            "Modular Lights",
            "Light Panels",
            "Tube Lights",
            "Fluorescent",
            "Other"
          ]
        },
        {
          name: "Light Modifiers",
          items: []
        },
        {
          name: "Light Stands",
          items: []
        },
        {
          name: "Light Accessories",
          items: []
        },
        {
          name: "Light Control",
          items: []
        },
        {
          name: "SFX",
          items: []
        }
      ]
    },
    {
      name: "Live Production",
      subcategories: [
        {
          name: "Streaming",
          items: []
        },
        {
          name: "AV",
          items: []
        },
        {
          name: "IT",
          items: []
        }
      ]
    },
    {
      name: "Monitors & Recorders",
      subcategories: [
        {
          name: "Monitors & Recorders",
          items: []
        }
      ]
    },
    {
      name: "Grips & Gadgets",
      subcategories: [
        {
          name: "Trust & Rigging",
          items: []
        },
        {
          name: "Grip",
          items: []
        },
        {
          name: "Decoration",
          items: []
        }
      ]
    },
    {
      name: "Cables & Adapters",
      subcategories: [
        {
          name: "Cables",
          items: ["Audio Cables", "Video Cables", "Power Cables", "Network"]
        },
        {
          name: "Adapters, converters & dist",
          items: []
        },
        {
          name: "Accessories",
          items: []
        }
      ]
    },
    {
      name: "Sales items",
      subcategories: [
        {
          name: "Production & consumables",
          items: []
        },
        {
          name: "Production equipment",
          items: []
        },
        {
          name: "Backgrounds",
          items: []
        }
      ]
    }
  ];

  // State to track expanded main categories
  const [expandedCategories, setExpandedCategories] = useState({});

  // State to track expanded subcategories (e.g., "Lights & Modifiers")
  const [expandedSubcategories, setExpandedSubcategories] = useState({});

  // Toggle expanded state for main categories
  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  // Toggle expanded state for subcategories
  const toggleSubcategory = (subcategoryName) => {
    setExpandedSubcategories((prev) => ({
      ...prev,
      [subcategoryName]: !prev[subcategoryName]
    }));
  };

  // Handle showing main categories (initially show all)
  const [showAllMainCategories, setShowAllMainCategories] = useState(true);
  const displayedMainCategories = showAllMainCategories
    ? categories
    : categories.slice(0, 2);

  return (
    <div className="w-[350px] h-auto bg-white p-6 rounded-lg shadow-sm border transition-transform duration-600 border-zinc-700 sticky top-20">
      {/* Filter Title with Underline */}
      <h2 className="text-2xl font-bold text-black mb-2">Filter</h2>
      <div className="w-full h-[2px] bg-black mb-6"></div>

      {/* Categories Section */}
      <h3 className="text-lg font-semibold text-black mb-3">Categories</h3>
      <div className="space-y-2">
        {/* Main Categories */}
        {displayedMainCategories.map((category, index) => (
          <div key={index} className="mb-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleCategory(category.name)}
            >
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4 accent-lime text-black border-gray-300 rounded"
                />
                <span className="text-black font-medium">{category.name}</span>
              </label>
              <span className="text-black">
                {expandedCategories[category.name] ? "−" : "+"}
              </span>
            </div>

            {/* Subcategories */}
            {expandedCategories[category.name] && (
              <div className="ml-6 mt-2 space-y-3">
                {category.subcategories.map((subcategory, subIndex) => (
                  <div key={subIndex} className="mb-1">
                    {/* Subcategory with toggle only for "Lights & Modifiers" */}
                    {subcategory.name === "Lights & Modifiers" ? (
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSubcategory(subcategory.name)}
                      >
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2 h-4 w-4 accent-lime text-black border-gray-300 rounded"
                          />
                          <span className="text-black font-medium">
                            {subcategory.name}
                          </span>
                        </label>
                        <span className="text-black">
                          {expandedSubcategories[subcategory.name] ? "−" : "+"}
                        </span>
                      </div>
                    ) : (
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2 h-4 w-4 accent-lime text-black border-gray-300 rounded"
                        />
                        <span className="text-black font-medium">
                          {subcategory.name}
                        </span>
                      </label>
                    )}

                    {/* Items - only visible for "Lights & Modifiers" when expanded */}
                    {subcategory.name === "Lights & Modifiers" &&
                      expandedSubcategories[subcategory.name] && (
                        <div className="ml-6 mt-1 space-y-1">
                          {subcategory.items.map((item, itemIndex) => (
                            <label
                              key={itemIndex}
                              className="flex items-center"
                            >
                              <input
                                type="checkbox"
                                className="mr-2 h-4 w-4 accent-lime text-black border-gray-300 rounded"
                              />
                              <span className="text-black text-sm">{item}</span>
                            </label>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Show More / Show Less Toggle for main categories */}
        {categories.length > 2 && (
          <p
            className="text-sm text-black cursor-pointer hover:underline"
            onClick={() => setShowAllMainCategories(!showAllMainCategories)}
          >
            {showAllMainCategories ? "Show Less" : "Show More"}
          </p>
        )}
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
