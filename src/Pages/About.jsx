/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../assets/assets";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-primary text-white text-center py-10">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-2">Learn more about our mission, vision, and values.</p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Mission Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            At Slot Sync, our mission is to provide exceptional service and create innovative solutions that
            meet the needs of our customers. We strive to make a positive impact in everything we do.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
          <div className="flex  gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={assets.satyamimg}
                alt="Team Member"
              />
              <h3 className="text-xl font-bold text-center mt-4">Satyam Soni</h3>
              
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h3 className="text-xl font-bold text-center mt-4">Mahtab Husain</h3>
             
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h3 className="text-xl font-bold text-center mt-4">Shashank Mishra</h3>
              
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 text-lg">
            <li>Integrity and honesty in every action.</li>
            <li>Innovation that drives progress.</li>
            <li>Commitment to excellence and customer satisfaction.</li>
            <li>Teamwork and collaboration.</li>
            <li>Social responsibility and sustainability.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
