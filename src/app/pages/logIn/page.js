"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", loginData);
    // Add your login logic here
    alert("Login functionality to be implemented");
  };

  return (
    <div>
      {/* Login Section */}
      <div className="max-w-5xl mx-auto m-top-spacing px-4 flex justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-h2 font-semibold mb-6 text-center text-lime">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
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

            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-lime text-black font-medium rounded-md hover:bg-transparent hover:text-lime transition-colors duration-300"
              >
                Login
              </button>
            </div>

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
