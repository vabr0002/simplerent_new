import React from "react";
import Link from "next/link";
import { FaSearch, FaCamera } from "react-icons/fa";
import { BsGearWideConnected } from "react-icons/bs";

const Navigation = () => {
  const iconClasses =
    "text-3xl text-white group-hover:text-lime transition-colors duration-200";
  const linkClasses =
    "group text-p font-light hover:text-lime py-2 px-4 w-full h-16 text-center flex flex-col items-center justify-center whitespace-nowrap"; // Added px-4
  const iconButtonClasses =
    "relative bg-white text-black p-4 w-10 h-10 flex items-center justify-center rounded-xl hover:scale-110 transition-transform duration-300 cursor-pointer hover:bg-lime";

  return (
    <nav className="flex flex-col items-center">
      <div className="flex justify-between items-center w-full p-3">
        <div className="flex gap-6 ml-4">
          <Link className="text-h4 hover:text-lime" href="">
            How it works
          </Link>
          <Link className="text-h4 hover:text-lime" href="">
            Learn
          </Link>
        </div>
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="flex gap-6 mr-4">
          <div className={iconButtonClasses}>
            <FaSearch className="absolute text-black text-xl" />
          </div>
          <div className={iconButtonClasses}>
            <BsGearWideConnected className="absolute text-black text-xl" />
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full pt-2 bg-opacity-80 font-helvetica">
        {[
          "Kits",
          "Camera & Accessories",
          "Audio",
          "Lighting, Sfx & Stands",
          "Live Production",
          "Monitors & Recorders",
          "Grips & Gadgets",
          "Cables & Adapters",
          "Production & Consumables",
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
    </nav>
  );
};

export default Navigation;
