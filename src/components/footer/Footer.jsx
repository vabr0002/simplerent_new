import React from "react";
import Button from "../button/Button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between p-8 md:p-24 gap-8 md:gap-12 items-center md:items-start">
      <div className="w-full md:w-1/4 flex flex-col gap-4 text-center md:text-left">
        <h2 className="font-helvetica text-h2">Contact</h2>
        <p className="text-h5">
          We are here to help and serve you. Give us a call or send us a mail
        </p>
        <Button className="bg-lime text-black">Contact Us</Button>
        <h3>Jernholmen dut dut dut</h3>
      </div>
      <div className="w-full md:w-1/4 flex flex-col gap-4 text-center md:text-left">
        <h2 className="font-helvetica text-h2">Booking</h2>
        <Link className="text-h5 hover:text-lime" href="">
          How It Works
        </Link>
        <Link className="text-h5 hover:text-lime" href="">
          Book Here
        </Link>
        <Link className="text-h5 hover:text-lime" href="">
          My Account
        </Link>
        <Link className="text-h5 hover:text-lime" href="">
          Checkout
        </Link>
      </div>
      <div className="w-full md:w-1/4 flex flex-col gap-4 text-center md:text-left">
        <h2 className="font-helvetica text-h2">More</h2>
        <Link className="text-h5 hover:text-lime" href="">
          About Us
        </Link>
        <Link className="text-h5 hover:text-lime" href="">
          Get In Touch
        </Link>
        <Link className="text-h5 hover:text-lime" href="">
          Stay Updated
        </Link>
        <Link className="text-h5 hover:text-lime" href="">
          Terms & Conditions
        </Link>
        <Link className="text-h5 hover:text-lime" href="">
          Cookie Policy
        </Link>
        <Link className="text-h5 hover:text-lime" href="">
          Privacy Policy
        </Link>
      </div>
      <div className="w-full md:w-1/4 text-center md:text-left">
        <h2 className="font-helvetica text-h2">Follow Us</h2>
      </div>
    </div>
  );
};

export default Footer;
