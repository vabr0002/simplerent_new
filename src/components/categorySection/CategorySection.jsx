import React from "react";

// Component to display a section of popular categories in a grid layout
const CategorySection = () => {
  // Sample category data (you can replace this with real data later)
  const categories = [
    { id: 1, name: "Cameras" },
    { id: 2, name: "Lenses" },
    { id: 3, name: "Lighting" },
    { id: 4, name: "Audio" },
    { id: 5, name: "Tripods" },
    { id: 6, name: "Drones" },
    { id: 7, name: "Gimbals" },
    { id: 8, name: "Batteries" },
    { id: 9, name: "Monitors" },
    { id: 10, name: "Accessories" }
  ];

  return (
    <section className="bg-white py-24 flex flex-col items-center justify-center">
      {/* Centered H1 Title */}
      <h1 className="text-center text-4xl font-bold mb-8 text-black">
        Popular Categories
      </h1>

      {/* Responsive grid layout for categories */}
      <div
        className="grid grid-cols-2 sm:grid-cols-5 gap-4 mx-auto max-w-screen-xl px-4"
        style={{ gridTemplateRows: "repeat(2, 160px)" }} // Fixed height for 2 rows on desktop
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="w-[240px] h-[160px] bg-gray-200 rounded-2xl flex items-center justify-center text-white bg-black text-lg font-semibold border hover:scale-105 transition-transform duration-300"
          >
            {/* Each category displayed in a styled box with hover scaling effect */}
            {category.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
