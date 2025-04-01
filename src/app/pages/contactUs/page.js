"use client"; // Enables client-side interactivity in a Next.js app (required for useState)

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // Initialize form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  // Handle input changes for all form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value // Update the specific field
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData); // Log the submitted data
    alert(
      "Thank you for your message! We will get back to you as soon as possible."
    );
    // Clear the form after submission
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return (
    <div>
      {/* Hero Section with background image */}
      <div className="relative h-[60vh] -mt-[75px]">
        <div className="relative w-full h-full">
          <Image
            src="/img/hero.webp"
            alt="Hero Image"
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>

        {/* Hero Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="text-h1 font-bold">
            <span className="text-lime text-h1">Get in touch</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto my-12 px-4 flex flex-col md:flex-row gap-20 mt-top-spacing">
        {/* Contact Info (left column) */}
        <div className="flex-1 p-6">
          <h2 className="text-h2 font-semibold mb-6 text-center text-white">
            Contact us through these
          </h2>
          <div className="space-y-4 text-white">
            <p>
              <strong>Phone:</strong> +45 12 34 56 78
            </p>
            <p>
              <strong>Email:</strong> kontakt@example.com
            </p>
            <p>
              <strong>Address:</strong> Example Street 123, 1234 Example City
            </p>
          </div>
        </div>

        {/* Contact Form (right column) */}
        <div className="flex-1">
          <h2 className="text-h2 font-semibold mb-6 text-center">
            Send us a message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First and Last Name */}
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
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
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
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-lime text-black border-2 border-lime font-medium rounded-md transition-all duration-300 hover:bg-transparent hover:text-lime"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}