// Enable client-side rendering in Next.js
"use client";

import { useState } from "react"; // Import useState hook for managing local state
import Link from "next/link";     // Import Link component for client-side navigation
import Image from "next/image";   // Import Image component (currently unused here)

// Default export of the Home component
export default function Home() {
  // State to store the user's login credentials
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  // Handle input field changes and update the corresponding state
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the input
    setLoginData((prev) => ({
      ...prev,
      [name]: value // Dynamically update the field being edited
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing on submit
    console.log("Login attempt:", loginData); // Log login data (for testing)
    alert("Login functionality to be implemented"); // Placeholder feedback
  };

  return (
    <div>
      {/* Login Section */}
      <div className="max-w-5xl mx-auto m-top-spacing px-4 flex justify-center">
        <div className="w-full max-w-md">
          {/* Login Heading */}
          <h2 className="text-h2 font-semibold mb-6 text-center text-lime">
            Login
          </h2>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={loginData.username}
                onChange={handleChange}
                className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                placeholder="Username"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                placeholder="Password"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-lime text-black font-medium rounded-md hover:bg-transparent hover:text-lime transition-colors duration-300"
              >
                Login
              </button>
            </div>

            {/* Sign-Up Link */}
            <div className="text-center mt-4">
              <p className="text-white">
                Don't have an account?{" "}
                <Link
                  href="/pages/signUp"
                  className="text-lime hover:underline"
                >
                  Sign up here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}