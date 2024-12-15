// eslint-disable-next-line no-unused-vars
import React from "react";
import { assets } from "../assets/assets";

function Banner2() {
  return (
    <div>
      <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
        <div className="flex-1 py-8 sm:py-16 lg:py-24 lg:pl-5 ">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
            <p>Add Your</p>
            <p className="mt-4">Insurance Details</p>
          </div>

         

          {/* Insurance Section */}
          <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">
              Add Your Insurance Details
            </h2>
            <p className="mt-4 text-sm text-gray-600">
              Please provide your insurance information to complete your
              profile.
            </p>

            <div className="mt-6">
              <label
                htmlFor="insuranceProvider"
                className="block text-sm font-medium text-gray-700"
              >
                Insurance Provider
              </label>
              <input
                type="text"
                id="insuranceProvider"
                placeholder="Enter your insurance provider"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="insuranceNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Insurance Number
              </label>
              <input
                type="text"
                id="insuranceNumber"
                placeholder="Enter your insurance number"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mt-6">
              <button
                onClick={() => {
                  // Handle form submission logic here
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-700 transition-all duration-300"
              >
                Submit Insurance Details
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
          <img
            className="w-full absolute bottom-0 right-0 max-w-md "
            src={assets.Insurance}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner2;
