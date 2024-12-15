/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const Navigate = useNavigate();
  const [Showmenu, setShowmenu] = useState(false); // State to control menu visibility
  const [Token, setToken] = useState(true);

  // Toggle the dropdown menu visibility on click
  const toggleMenu = () => {
    setShowmenu(!Showmenu);
  };

  return (
    <div>
      <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-300 px-4 lg:px-8">
        {/* Logo */}
        <img
          onClick={() => Navigate("/")}
          className="w-32 md:w-44 cursor-pointer"
          src={assets.logo}
          alt="Logo"
        />

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {["/", "/doctor", "/about", "/contact"].map((path, index) => (
            <NavLink
              to={path}
              key={index}
              className={({ isActive }) =>
                `py-1 ${
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : "hover:text-primary"
                }`
              }
            >
              {path === "/"
                ? "Home"
                : path.slice(1, 2).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}
        </ul>

        {/* User Section */}
        <div className="flex items-center gap-4">
          {Token ? (
            <div className="relative">
              {/* Profile Icon */}
              <div
                onClick={toggleMenu} // Toggle menu on click
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={assets.profile_pic}
                  alt="Profile"
                />
              </div>

              {/* Dropdown Menu */}
              {Showmenu && (
                <div className="absolute right-0 top-12 bg-white shadow-md rounded-lg z-10">
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      Navigate("/MyProfile");
                    }}
                    className="hover:text-primary cursor-pointer px-4 py-2"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      Navigate("/MyAppointment");
                    }}
                    className="hover:text-primary cursor-pointer px-4 py-2"
                  >
                    My Appointment
                  </p>
                  <p
                    onClick={() => setToken(false)}
                    className="hover:text-primary cursor-pointer px-4 py-2"
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => Navigate("/login")}
              className="bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block hover:bg-opacity-90 transition-all"
            >
              Create Account
            </button>
          )}
        </div>
      </div>

      {/* Fixed AI Chat Button */}
      <div
        className="fixed bottom-5 right-5 bg-primary text-white py-2 px-6 rounded-full shadow-md cursor-pointer"
        onClick={() => Navigate("/ai-chat")}
      >
        AI Chat
      </div>
    </div>
  );
}

export default Navbar;
