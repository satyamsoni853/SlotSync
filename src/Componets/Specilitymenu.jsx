/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

function Specilitymenu() {
  return (
    <div id="specialty" className="text-center py-8 px-4">
    <h1 className="text-2xl font-bold mb-2">Find Our Doctor By Their Professions</h1>
    <p className="text-gray-600 mb-8">Trust Our Best Doctor</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {specialityData.map((item, index) => (
        <Link
          key={index}
          to={`/doctor/${item.speciality}`}
          className="group bg-white shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105"
        >
          <img
            src={item.image}
            alt={item.speciality}
            className="w-24 h-24 object-cover mb-4 rounded-full"
          />
          <p className="text-lg font-medium text-gray-800 group-hover:text-primary">
            {item.speciality}
          </p>
        </Link>
      ))}
    </div>
  </div>
  );
}

export default Specilitymenu;
