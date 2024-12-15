/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

function TopDoctor() {
  const navigate =useNavigate()
  const {doctors}=useContext(AppContext)
  return (
    <div className="text-center p-6">
    <h1 className="text-3xl font-semibold mb-2">Our Top Doctors</h1>
    <p className="mb-6">Browse Doctor According To Your Problem</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {doctors.slice(0, 12).map((item, index) => (
        <div onClick={() => {navigate(`/Appointment/${item._id}`);scrollTo(0,0)}}
          className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-center transition-transform transform hover:scale-105 hover:shadow-lg"
          key={index}
        >
          <img className="w-32 h-32 rounded-full mx-auto mb-4 transition-transform transform hover:scale-110" src={item.image} alt={item.name} />
          <div className="mb-4">
            <div className="text-green-500 font-bold">Available</div>
            <p className="font-semibold text-xl mt-2">{item.name}</p>
            <p className="text-gray-500">{item.speciality}</p>
          </div>
        </div>
      ))}
    </div>
    <button onClick={()=>{
      navigate('/doctors'); scrollTo(0,0)
    }} className="mt-6 px-6 py-2 text-lg font-medium bg-primary text-white rounded-md hover:bg-blue-700">
      More
    </button>
  </div>
  )
}

export default TopDoctor