import React from "react";
import Link from "next/link";

const Button = ({
  href = "/pages/singleProduct",
  className = "",
  children = "Click Me",
}) => {
  return (
    <Link href={href}>
      <button
        className={`px-7 py-2 text-black rounded-lg transition duration-300 hover:text-black hover:bg-none   ${className}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
