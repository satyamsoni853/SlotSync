import React from 'react';

function DoctorPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-80 bg-white shadow-lg p-6 flex flex-col">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Dr. John Doe</h2>
          <p className="text-gray-500">Cardiologist</p>
        </div>
        <div className="flex flex-col gap-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Chat with Patient
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            Video Call
          </button>
          <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition">
            Accept Appointment
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
            Cancel Appointment
          </button>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
            Update Profile
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Doctor Dashboard</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-800 font-semibold">Patient: Jane Smith</p>
          <p className="text-gray-600">Problem: I have fever</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorPage;