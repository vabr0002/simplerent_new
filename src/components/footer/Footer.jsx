import React from "react";
import Button from "../button/Button"; // Importing a reusable Button component
import Link from "next/link"; // Next.js Link component for client-side navigation
import { FaInstagram, FaFacebookF, FaXTwitter, FaPlane } from "react-icons/fa6"; // Importing icons from react-icons

const Footer = () => {
  return (
    // Main footer container with responsive flex layout and padding
    <div className="flex flex-col md:flex-row md:justify-between p-8 md:p-24 gap-8 md:gap-12 items-center md:items-start">
      {/* Contact Section */}
      <div className="w-full md:w-1/4 flex flex-col gap-4 text-center md:text-left">
        <h2 className="font-helvetica text-h2">Contact</h2>{" "}
        {/* Section title */}
        <p className="text-h5">
          We are here to help and serve you. Give us a call or send us a mail
        </p>{" "}
        {/* Contact description */}
        {/* Custom button with hover effects */}
        <Button className="bg-lime text-black border-2 border-lime hover:bg-transparent hover:text-lime transition-all duration-300">
          Contact Us
        </Button>
        <h3>Jernholmen 2, 2650 Hvidovre</h3> {/* Physical address */}
        {/* Social Media Links */}
        <div className="flex justify-center md:justify-start gap-4 mt-4">
          {/* Instagram link with hover effect */}
          <Link
            href="https://www.instagram.com/simplerent.dk/"
            target="_blank" // Opens in new tab
            rel="noopener noreferrer" // Security attributes
          >
            <FaInstagram className="text-3xl hover:text-lime transition duration-300" />
          </Link>
          {/* Facebook link with hover effect */}
          <Link
            href="https://www.facebook.com/SimpleRent.dk?locale=da_DK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-3xl hover:text-lime transition duration-300" />
          </Link>
          {/* Twitter link with hover effect */}
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-3xl hover:text-lime transition duration-300" />
          </Link>
        </div>
      </div>

      {/* Booking Section */}
      <div className="w-full md:w-1/4 flex flex-col gap-4 text-center md:text-left">
        <h2 className="font-helvetica text-h2">Booking</h2>{" "}
        {/* Section title */}
        {/* Navigation links with hover effects */}
        <Link className="text-h5 hover:text-lime" href="/pages/howItWorks">
          How It Works
        </Link>
        <Link className="text-h5 hover:text-lime" href="/pages/products">
          Book Here
        </Link>
        <Link className="text-h5 hover:text-lime" href="/pages/userPage">
          My Account
        </Link>
      </div>

      {/* More Section */}
      <div className="w-full md:w-1/4 flex flex-col gap-4 text-center md:text-left">
        <h2 className="font-helvetica text-h2">More</h2> {/* Section title */}
        {/* Additional navigation links with hover effects */}
        <Link className="text-h5 hover:text-lime" href="/pages/aboutUs">
          About Us
        </Link>
        <Link className="text-h5 hover:text-lime" href="/pages/contactUs">
          Get In Touch
        </Link>
        <Link className="text-h5 hover:text-lime" href="/pages/stayUpdated">
          Stay Updated
        </Link>
        <Link
          className="text-h5 hover:text-lime"
          href="/pages/termsAndConditions"
        >
          Terms & Conditions
        </Link>
        <Link className="text-h5 hover:text-lime" href="/pages/cookie">
          Cookie Policy
        </Link>
        <Link className="text-h5 hover:text-lime" href="/pages/privacy">
          Privacy Policy
        </Link>
      </div>

      {/* Location Section */}
      <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
        <h2 className="font-helvetica text-h2">Location</h2>{" "}
        {/* Section title */}
        {/* Styled badge showing proximity to airport */}
        <div className="mt-4 mb-4 transform hover:scale-105 transition-transform duration-300">
          <div className="bg-black border-2 border-lime rounded-lg px-4 py-2 flex items-center justify-center gap-2 shadow-lg">
            <FaPlane className="text-lime text-xl animate-pulse" />{" "}
            {/* Animated plane icon */}
            <div className="flex flex-col">
              <span className="text-white font-bold">
                ONLY <span className="text-lime text-xl">11 MIN</span>
              </span>{" "}
              {/* Highlighted time */}
              <span className="text-white text-sm uppercase tracking-wider">
                from CPH Airport
              </span>{" "}
              {/* Airport reference */}
            </div>
          </div>
        </div>
        {/* Embedded Google Map showing location */}
        <iframe
          title="Google Map"
          className="w-full h-48 md:h-64" // Responsive height
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.38777868153!2d12.48880108458029!3d55.61266799199647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652544aa39be0e7%3A0xcf59be537898c2d2!2sJernholmen%202%2C%202650%20Hvidovre!5e0!3m2!1sda!2sdk!4v1741167484125!5m2!1sda!2sdk"
          width="600"
          height="450"
          style={{ border: 0 }} // Remove default border
          allowFullScreen // Enable fullscreen option
          loading="lazy" // Optimize loading performance
          referrerPolicy="no-referrer-when-downgrade" // Security policy
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
