import React from "react";

const FeaturedEquipmentSection = () => {
  // Sample equipment data (replace with real data as needed)
  const equipment = [
    {
      id: 1,
      title: "Sony FX6",
      description: "Full-frame cinema camera",
      price: "500 DKK",
      imageSrc: "/img/sony_fx6.jpg"
    },
    {
      id: 2,
      title: "Canon 50mm Lens",
      description: "Prime lens for portraits",
      price: "200 DKK",
      imageSrc: "/img/sony_fx6.jpg"
    },
    {
      id: 3,
      title: "LED Panel",
      description: "Portable lighting solution",
      price: "150 DKK",
      imageSrc: "/img/sony_fx6.jpg"
    },
    {
      id: 4,
      title: "Rode Mic",
      description: "High-quality audio recording",
      price: "300 DKK",
      imageSrc: "/img/sony_fx6.jpg"
    }
  ];

  return (
    <section className="bg-darkgrey flex flex-col items-center justify-center pt-32 pb-24 min-h-[600px]">
      {/* Centered Title */}
      <h1 className="text-center text-4xl font-bold mb-8 text-white">
        Featured Equipment This Week
      </h1>

      {/* 1x4 Grid */}
      <div className="grid grid-cols-4 gap-6 mx-auto max-w-screen-xl px-4">
        {equipment.map((item) => (
          <div
            key={item.id}
            className="w-[240px] bg-inherit text-white rounded-lg overflow-hidden shadow-lg"
          >
            {/* Product Image */}
            <div className="relative">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              {/* Heart Icon - Hardcoded instead of from ProductCard */}
              <div className="absolute top-2 right-2 text-lime">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Product Content */}
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-sm mb-2">{item.description}</p>
              <p className="font-semibold mb-3">{item.price}</p>

              {/* Hardcoded Button Instead of Dynamic */}
              <a
                href="/pages/singleProducts"
                className="inline-block bg-lime text-black py-0.5 px-2 text-xs rounded-md"
              >
                Rent Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedEquipmentSection;
