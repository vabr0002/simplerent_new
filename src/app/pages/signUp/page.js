"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic password confirmation
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup attempt:", signupData);
    // Add your signup logic here
    alert("Signup functionality to be implemented");
  };

  return (
    <div>
      {/* Signup Section */}
      <div className="max-w-5xl mx-auto m-top-spacing px-4 flex justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-h2 font-semibold mb-6 text-center text-lime">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium"
                >
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
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium"
                >
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
                value={signupData.password}
                onChange={handleChange}
                className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                placeholder="Create a password"
                required
                minLength={8}
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium"
              >
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

            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-lime text-black font-medium rounded-md hover:bg-transparent hover:text-lime transition-colors duration-300"
              >
                Create Account
              </button>
            </div>

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
