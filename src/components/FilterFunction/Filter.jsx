"use client";

import React, { useState } from "react";

const Filter = () => {
  // Define the main categories and their subcategories with items in a structured array
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

  // State to manage which main categories are expanded or collapsed
  const [expandedCategories, setExpandedCategories] = useState({});

  // State to manage which subcategories are expanded or collapsed (e.g., "Lights & Modifiers")
  const [expandedSubcategories, setExpandedSubcategories] = useState({});

  // Function to toggle the expanded state of a main category
  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName] // Toggle between true/false
    }));
  };

  // Function to toggle the expanded state of a subcategory
  const toggleSubcategory = (subcategoryName) => {
    setExpandedSubcategories((prev) => ({
      ...prev,
      [subcategoryName]: !prev[subcategoryName] // Toggle between true/false
    }));
  };

  // State to control whether all main categories are shown or just the first two
  const [showAllMainCategories, setShowAllMainCategories] = useState(true);

  // Determine which categories to display based on showAllMainCategories state
  const displayedMainCategories = showAllMainCategories
    ? categories // Show all categories
    : categories.slice(0, 2); // Show only the first two categories

  return (
    // Container for the filter component with styling and sticky positioning
    <div className="w-[350px] h-auto bg-white p-6 rounded-lg shadow-sm border transition-transform duration-600 border-zinc-700 sticky top-20">
      {/* Filter title with a decorative underline */}
      <h2 className="text-2xl font-bold text-black mb-2">Filter</h2>
      <div className="w-full h-[2px] bg-black mb-6"></div>

      {/* Categories section header */}
      <h3 className="text-lg font-semibold text-black mb-3">Categories</h3>
      <div className="space-y-2">
        {/* Render the list of main categories */}
        {displayedMainCategories.map((category, index) => (
          <div key={index} className="mb-2">
            {/* Main category header with checkbox and toggle button */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleCategory(category.name)} // Toggle category on click
            >
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4 accent-lime text-black border-gray-300 rounded"
                />
                <span className="text-black font-medium">{category.name}</span>
              </label>
              {/* Show minus or plus sign based on expanded state */}
              <span className="text-black">
                {expandedCategories[category.name] ? "−" : "+"}
              </span>
            </div>

            {/* Render subcategories when the main category is expanded */}
            {expandedCategories[category.name] && (
              <div className="ml-6 mt-2 space-y-3">
                {category.subcategories.map((subcategory, subIndex) => (
                  <div key={subIndex} className="mb-1">
                    {/* Special handling for "Lights & Modifiers" with toggle functionality */}
                    {subcategory.name === "Lights & Modifiers" ? (
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSubcategory(subcategory.name)} // Toggle subcategory on click
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
                        {/* Show minus or plus sign based on expanded state */}
                        <span className="text-black">
                          {expandedSubcategories[subcategory.name] ? "−" : "+"}
                        </span>
                      </div>
                    ) : (
                      // Default rendering for subcategories without toggle
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

                    {/* Render items under "Lights & Modifiers" when expanded */}
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

        {/* Toggle link to show more or fewer main categories */}
        {categories.length > 2 && (
          <p
            className="text-sm text-black cursor-pointer hover:underline"
            onClick={() => setShowAllMainCategories(!showAllMainCategories)} // Toggle visibility
          >
            {showAllMainCategories ? "Show Less" : "Show More"}
          </p>
        )}
      </div>

      {/* Price range section */}
      <h3 className="text-lg font-semibold text-black mt-6 mb-3">
        Price Range
      </h3>
      <div className="flex space-x-4">
        {/* Input for minimum price */}
        <input
          type="text"
          placeholder="From"
          className="w-1/2 p-2 border border-gray-300 rounded-md text-black placeholder-gray-400 
               focus:outline-none focus:ring-2 focus:ring-lime focus:border-lime selection:bg-lime selection:text-black"
        />
        {/* Input for maximum price */}
        <input
          type="text"
          placeholder="To"
          className="w-1/2 p-2 border border-gray-300 rounded-md text-black placeholder-gray-400 
               focus:outline-none focus:ring-2 focus:ring-lime focus:border-lime selection:bg-lime selection:text-black"
        />
      </div>

      {/* Status section */}
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
