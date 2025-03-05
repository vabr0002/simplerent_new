import React from "react";
import Button from "../button/Button";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6"; // Import social icons

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between p-8 md:p-24 gap-8 md:gap-12 items-center md:items-start">
      <div className="w-full md:w-1/4 flex flex-col gap-4 text-center md:text-left">
        <h2 className="font-helvetica text-h2">Contact</h2>
        <p className="text-h5">
          We are here to help and serve you. Give us a call or send us a mail
        </p>
        <Button className="bg-lime text-black">Contact Us</Button>
        <h3>Jernholmen 2, 2650 Hvidovre</h3>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-lime transition duration-300" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-2xl hover:text-lime transition duration-300" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-2xl hover:text-lime transition duration-300" />
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/4 flex flex-col gap-4 text-center md:text-left">
        <h2 className="font-helvetica text-h2">Booking</h2>
        <Link className="text-h5 hover:text-lime" href="/pages/howItWorks">
          How It Works
        </Link>
        <Link className="text-h5 hover:text-lime" href="/pages/products">
          Book Here
        </Link>
        <Link className="text-h5 hover:text-lime" href="/pages/myAccount">
          My Account
        </Link>
      </div>

      <div className="w-full md:w-1/4 flex flex-col gap-4 text-center md:text-left">
        <h2 className="font-helvetica text-h2">More</h2>
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

      <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
        <h2 className="font-helvetica text-h2">Location</h2>
        <iframe
          title="Google Map"
          className="w-full h-48 md:h-64"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.38777868153!2d12.48880108458029!3d55.61266799199647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652544aa39be0e7%3A0xcf59be537898c2d2!2sJernholmen%202%2C%202650%20Hvidovre!5e0!3m2!1sda!2sdk!4v1741167484125!5m2!1sda!2sdk"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
