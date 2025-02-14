import React from "react";
import Link from "next/link";

const Button = ({ href = "#", className = "", children = "Click Me" }) => {
  return (
    <Link href={href}>
      <button
        className={`px-10 py-4 text-black rounded-lg transition duration-300 hover:text-white hover:bg-transparent  ${className}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
