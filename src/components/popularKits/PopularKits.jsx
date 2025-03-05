import React from "react";
import Card from "../kitCard/KitCard";

const PopularKits = () => {
  const kits = [
    { id: 1, title: "Starter Kit", description: "Perfect for beginners" },
    { id: 2, title: "Professional Kit", description: "For the pros" },
    { id: 3, title: "Video Kit", description: "All-in-one video solution" },
    { id: 4, title: "Audio Kit", description: "For sound professionals" },
    { id: 5, title: "Lighting Kit", description: "Illuminate your scene" },
    { id: 6, title: "Action Kit", description: "For dynamic shoots" },
    { id: 7, title: "Streaming Kit", description: "For live broadcasts" },
    { id: 8, title: "Mobile Kit", description: "Compact and portable" },
  ];

  return (
    <section className="bg-white py-10 pb-24">
      <h2 className="text-center text-h1 font-bold mt-8 mb-8 text-black">
        Most Rented Kits
      </h2>
      <div
        className="grid grid-cols-4 gap-4 mx-auto max-w-screen-xl px-4"
        style={{ gridTemplateColumns: "repeat(4, minmax(200px, 1fr))" }}
      >
        {kits.map((kit) => (
          <Card
            key={kit.id}
            title={kit.title}
            description={kit.description}
            buttonText="Rent Now"
            buttonLink="#"
            imageSrc="/img/sony_fx6.jpg"
            borderColor="black"
            bgColor="lightgray"
            textColor="black"
            buttonBgColor="lime"
            buttonTextColor="black"
            heartColor="lime"
            borderWidth="border"
            borderRadius="rounded-2xl"
            className="w-[250px] h-[350px]"
            buttonSize="small"
          />
        ))}
      </div>
    </section>
  );
};

export default PopularKits;
