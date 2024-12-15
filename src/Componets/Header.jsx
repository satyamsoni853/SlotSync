/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../assets/assets";
import Slide from "./Slide";

function Header() {
  return (
    <div className="relative">
      {/* Slider Section */}
      <Slide />

      {/* Header Content */}
      <div className="flex flex-col md:flex-row bg-primary rounded-lg p-6 md:px-12 lg:px-16 mt-6 shadow-lg">
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-6 md:py-[8vw] text-center md:text-left relative z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-tight">
            Book Appointment <br /> With Your Nearest Doctor
          </h1>

          <p className="text-white text-sm md:text-base max-w-md mx-auto md:mx-0">
            Find the right doctor based on your needs and book your appointment
            in just a few clicks.
          </p>
{/* 
          <a
            className="flex items-center justify-center gap-3 bg-white px-6 py-3 rounded-full text-gray-700 text-sm font-medium hover:bg-gray-100 hover:scale-105 transition-transform duration-300 shadow-md"
            href="#specialty"
          >
            Book Appointment
          </a> */}
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative flex justify-center items-center mt-8 md:mt-0">
          <img
            className="w-full h-auto md:absolute md:bottom-0 rounded-lg object-cover"
            src={assets.header_img}
            alt="Doctor consultation"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
