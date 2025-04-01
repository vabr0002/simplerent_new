import React from "react";
import Image from "next/image";
import Link from "next/link";

// Component to display a grid of article previews
const Articles = () => {
  // Array of article objects, each containing title, description, image source, and link
  const articles = [
    {
      title: "Filming Tips for Beginners",
      description:
        "Learn the basics of filming with our expert tips and tricks to get started.",
      imageSrc: "/img/filming-tips.jpg", // Must be located in public/img/
      link: "/articles/filming-tips"
    },
    {
      title: "Choosing the Right Camera",
      description:
        "A guide to picking the perfect camera for your next project.",
      imageSrc: "/img/camera-guide.jpg", // Corrected from a previously incorrect path
      link: "/articles/choosing-camera" // Adjusted for consistent URL naming
    },
    {
      title: "Lighting Techniques 101",
      description: "Master the art of lighting with these simple techniques.",
      imageSrc: "/img/lighting-techniques.jpg",
      link: "/articles/lighting-techniques"
    },
    {
      title: "Audio Recording Basics",
      description:
        "Get started with audio recording using our beginner’s guide.",
      imageSrc: "/img/audio-basics.jpg",
      link: "/articles/audio-basics"
    },
    {
      title: "Editing Like a Pro",
      description: "Tips to take your video editing skills to the next level.",
      imageSrc: "/img/editing-pro.jpg",
      link: "/articles/editing-pro"
    },
    {
      title: "Gear Maintenance 101",
      description: "How to keep your equipment in top shape for every shoot.",
      imageSrc: "/img/gear-maintenance.jpg",
      link: "/articles/gear-maintenance"
    }
  ];

  // Render a responsive grid layout for the articles
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {articles.map((article, index) => (
        <div
          key={index}
          className="w-full max-w-[300px] mx-auto rounded-lg overflow-hidden"
        >
          {/* Image section at the top of each article card */}
          <div className="relative w-full h-48">
            <Image
              src={article.imageSrc}
              alt={article.title}
              fill // Uses 'fill' to ensure the image fills its container
              objectFit="cover" // Ensures the image covers the area without distortion
              className="w-full h-full"
            />
          </div>

          {/* Content section below the image */}
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {article.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{article.description}</p>
            <Link href={article.link}>
              <button className="bg-lime text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-lime-600 transition duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
