"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", { email, name });
    alert("Tak for tilmelding! Du er nu tilmeldt vores nyhedsbrev.");
    setEmail("");
    setName("");
  };

  return (
    <div className="max-w-5xl mx-auto my-12 px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-h1 font-bold text-center mb-8 text-white">
          Sign up for our <span className="text-lime">Newsletter</span>
        </h1>

        <div className="mx-60 my-10">
          <p>
            Join our newsletter to stay updated with our gear and services, we
            keep it relevant, short and interesting, promise!
          </p>
          <p>
            Go{" "}
            <Link href="/pages/contactUs" className="hover:text-lime">
              here
            </Link>{" "}
            to get in contact with us.{" "}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mx-40">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Navn
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
              placeholder="Indtast dit navn"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
              placeholder="Indtast din email"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-lime text-black font-medium rounded-md hover:bg-transparent hover:text-lime transition-colors duration-300"
            >
              Tilmeld nyhedsbrev
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
