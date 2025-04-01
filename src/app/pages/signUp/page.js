"use client"; // Enables client-side rendering for this component

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // State to hold form data
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  // Handles input changes and updates form state dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side password match check
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Log signup data (placeholder for real logic)
    console.log("Signup attempt:", signupData);
    alert("Signup functionality to be implemented");
  };

  return (
    <div>
      {/* Signup Section Container */}
      <div className="max-w-5xl mx-auto m-top-spacing px-4 flex justify-center">
        <div className="w-full max-w-md">
          {/* Form Title */}
          <h2 className="text-h2 font-semibold mb-6 text-center text-lime">
            Sign Up
          </h2>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name fields: First and Last */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* First Name */}
              <div className="flex-1">
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={signupData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                  placeholder="First name"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="flex-1">
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={signupData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={signupData.email}
                onChange={handleChange}
                className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                placeholder="Email"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={signupData.phone}
                onChange={handleChange}
                className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                placeholder="Phone number"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={signupData.password}
                onChange={handleChange}
                className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                placeholder="Create a password"
                required
                minLength={8}
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={signupData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                placeholder="Confirm your password"
                required
                minLength={8}
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-lime text-black font-medium rounded-md hover:bg-transparent hover:text-lime transition-colors duration-300"
              >
                Create Account
              </button>
            </div>

            {/* Login Redirect */}
            <div className="text-center mt-4">
              <p className="text-white">
                Already have an account?{" "}
                <Link href="/pages/logIn" className="text-lime hover:underline">
                  Log in here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}