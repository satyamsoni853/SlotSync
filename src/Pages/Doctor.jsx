/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { doctors } from "../assets/assets";

function Doctor() {
  const { specialty } = useParams();
  const { Doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [filterdoc, setfilterdoc] = useState([]);

  const applyfilter = () => {
    if (specialty) {
      setfilterdoc(doctors.filter((doc) => doc.speciality === specialty));
    } else {
      setfilterdoc(doctors);
    }
  };

  useEffect(() => {
    applyfilter();
  }, [doctors, specialty]);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Find Your Doctor</h1>
        <p className="text-gray-600">
          Browse specialists and find the right doctor for you.
        </p>
      </div>

      {/* Options Row */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
        {[
          "General physician",
          "Gynecologist",
          "Dermatologist",
          "Pediatrician",
          "Neurologist",
          "Gastroenterologist",
          "Orthopedic",
           "Cardiologist"
        ].map((special, index) => (
          <p
            key={index}
            onClick={() =>
              specialty === special
                ? navigate("/doctor")
                : navigate(`/doctor/${special}`)
            }
            className={`px-4 py-2 border border-gray-300 rounded-full transition-all cursor-pointer ${
              specialty === special
                ? "bg-primary text-white"
                : "hover:bg-blue-100"
            }`}
          >
            {special}
          </p>
        ))}
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterdoc.map((item, index) => (
          <div
            onClick={() => navigate(`/Appointment/${item._id}`)}
            className="bg-white border border-gray-300 rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg"
            key={index}
          >
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4 transition-transform transform hover:scale-110"
              src={item.image}
              alt={item.name}
            />
            <div className="mb-4">
              <span className="text-green-500 font-bold">Available</span>
              <p className="font-semibold text-xl mt-2">{item.name}</p>
              <p className="text-gray-500">{item.speciality}</p>
            </div>
            <button className="mt-4 px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-blue-600">
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctor;
