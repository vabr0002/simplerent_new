"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Tak for din besked! Vi vender tilbage hurtigst muligt.");
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
      <div className="relative h-[60vh] -mt-[75px]">
        {/* Hero Image Container */}
        <div className="relative w-full h-full">
          <Image
            src="/img/hero.webp"
            alt="Hero Image"
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="text-h1 font-bold">
            <span className="text-lime text-h1">Get in touch</span>
          </div>
        </div>
      </div>

      {/* Kontaktsektion med tekst og formular */}
      <div className="max-w-5xl mx-auto my-12 px-4 flex flex-col md:flex-row gap-20 mt-top-spacing">
        {/* Kontaktinformation boksen (nu til venstre) */}
        <div className="flex-1 p-6 ">
          <h2 className="text-h2 font-semibold mb-6 text-center text-white">
            Kontakt os på disse
          </h2>
          <div className="space-y-4 text-white">
            <p>
              <strong>Telefon:</strong> +45 12 34 56 78
            </p>
            <p>
              <strong>Email:</strong> kontakt@example.com
            </p>
            <p>
              <strong>Adresse:</strong> Eksempelgade 123, 1234 Eksempelby
            </p>
          </div>
        </div>

        {/* Kontaktformular (nu til højre) */}
        <div className="flex-1">
          <h2 className="text-h2 font-semibold mb-6 text-center">
            Send us a message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium"
                >
                  Fornavn
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
                  Efternavn
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
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                Telefonnummer
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
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Besked
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
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-lime text-black font-medium rounded-md hover:bg-transparent hover:text-lime "
              >
                Send besked
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
