/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assets } from "../assets/assets";

function MyProfile() {
  const [Userdata, setUserdata] = useState({
    name: "Satyam",
    Gender: "Male",
    DOB: "15-04-2004",
    Email: "Satyamsoni853@gmail.com",
    Phone: "+919696050128",
    Address: "BTM Layout Stage 2, Bengaluru",
    Image: assets.profile_pic,
  });

  const [Isedit, setIsedit] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
      {/* Profile Image */}
      <div className="text-center">
        <img
          src={Userdata.Image}
          alt="Profile Pic"
          className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md border-4 border-primary"
        />
      </div>

      {/* Profile Information */}
      <div className="space-y-4">
        {/* Name Field */}
        <div className="flex items-center justify-between">
          <p className="font-semibold text-gray-700">Name:</p>
          {Isedit ? (
            <input
              type="text"
              value={Userdata.name}
              onChange={(e) =>
                setUserdata((prev) => ({ ...prev, name: e.target.value }))
              }
              className="text-sm border rounded-md px-2 py-1 w-2/3 outline-none focus:border-blue-500"
            />
          ) : (
            <p>{Userdata.name}</p>
          )}
        </div>

        {/* Gender Field */}
        <div className="flex items-center justify-between">
          <p className="font-semibold text-gray-700">Gender:</p>
          {Isedit ? (
            <select
              value={Userdata.Gender}
              onChange={(e) =>
                setUserdata((prev) => ({ ...prev, Gender: e.target.value }))
              }
              className="text-sm border rounded-md px-2 py-1 w-2/3 outline-none focus:border-blue-500"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-Binary">Non-Binary</option>
              <option value="Prefer Not to Say">Prefer Not to Say</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <p>{Userdata.Gender}</p>
          )}
        </div>

        {/* DOB Field */}
        <div className="flex items-center justify-between">
          <p className="font-semibold text-gray-700">Date of Birth:</p>
          {Isedit ? (
            <input
              type="date"
              value={Userdata.DOB}
              onChange={(e) =>
                setUserdata((prev) => ({ ...prev, DOB: e.target.value }))
              }
              className="text-sm border rounded-md px-2 py-1 w-2/3 outline-none focus:border-blue-500"
            />
          ) : (
            <p>{Userdata.DOB}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="flex items-center justify-between">
          <p className="font-semibold text-gray-700">Email:</p>
          <p>{Userdata.Email}</p>
        </div>

        {/* Phone Field */}
        <div className="flex items-center justify-between">
          <p className="font-semibold text-gray-700">Phone:</p>
          {Isedit ? (
            <input
              type="text"
              value={Userdata.Phone}
              onChange={(e) =>
                setUserdata((prev) => ({ ...prev, Phone: e.target.value }))
              }
              className="text-sm border rounded-md px-2 py-1 w-2/3 outline-none focus:border-blue-500"
            />
          ) : (
            <p>{Userdata.Phone}</p>
          )}
        </div>

        {/* Address Field */}
        <div className="flex items-center justify-between">
          <p className="font-semibold text-gray-700">Address:</p>
          {Isedit ? (
            <textarea
              value={Userdata.Address}
              onChange={(e) =>
                setUserdata((prev) => ({ ...prev, Address: e.target.value }))
              }
              className="text-sm border rounded-md px-2 py-1 w-2/3 outline-none focus:border-blue-500"
            />
          ) : (
            <p>{Userdata.Address}</p>
          )}
        </div>
      </div>

      {/* Edit Button */}
      <div className="text-center mt-6">
        <button
          onClick={(e) => {
            e.preventDefault(); // Prevents unwanted behavior
            setIsedit(!Isedit);
          }}
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          {Isedit ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
}

export default MyProfile;
