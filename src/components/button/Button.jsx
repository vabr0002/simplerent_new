import React from "react";
import Link from "next/link";

// Reusable Button component with customizable link, styling, and content
const Button = ({
  href = "/pages/singleProduct", // Default link destination if none provided
  className = "", // Additional CSS classes to customize the button's appearance
  children = "Click Me" // Default text or content inside the button
}) => {
  return (
    <Link href={href}>
      {/* Button wrapped in a Next.js Link for navigation */}
      <button
        className={`px-7 py-2 text-black rounded-lg transition duration-300 hover:text-black hover:bg-none ${className}`}
        // Base styles: padding, text color, rounded corners, and hover effects
        // 'className' prop allows additional styling to be passed from the parent
      >
        {children} {/* Renders the content passed to the button */}
      </button>
    </Link>
  );
};

export default Button;
