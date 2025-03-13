"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", { email, name });
    alert(
      "Thank you for signing up! You are now subscribed to our newsletter."
    );
    setEmail("");
    setName("");
  };

  return (
    <div className="max-w-5xl mx-auto my-12 px-4">
      <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-h1 font-bold text-center mb-8 text-white">
          Sign up for our <span className="text-lime">Newsletter</span>
        </h1>

        <div className="my-6 md:my-10 px-4 md:px-16 text-center md:text-left">
          <p>
            Join our newsletter to stay updated with our gear and services. We
            keep it relevant, short, and interesting, promise!
          </p>
          <p>
            Go{" "}
            <Link href="/pages/contactUs" className="hover:text-lime">
              here
            </Link>{" "}
            to get in contact with us.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 px-4 md:px-12">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
              placeholder="Enter your name"
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
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-lime text-black border-2 border-lime font-medium rounded-md transition-all duration-300 hover:bg-transparent hover:text-lime"
            >
              Subscribe to newsletter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
