import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa'; // Verified icon

const RelatedDoctor = ({ docID, speciality }) => {
  const [Reldoc, setReldoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docID
      );
      setReldoc(doctorsData);
    }
  }, [doctors, docID, speciality]);

  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Related Doctors</h1>
      <p className="mb-8 text-lg text-gray-600">Browse Doctors According To Your Problem</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Reldoc.slice(0, 4).map((item, index) => (
          <div
            onClick={() => {navigate(`/Appointment/${item._id}`);scrollTo(0,0)}}
            className="bg-white border border-gray-300 rounded-lg p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
            key={index}
          >
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4 transition-transform transform hover:scale-110"
              src={item.image}
              alt={item.name}
            />
            <div>
              {item.isVerified && (
                <FaCheckCircle className="text-green-500 mb-2" />
              )}
              <p className="font-semibold text-xl mt-2">{item.name}</p>
              <p className="text-gray-500">{item.speciality}</p>
              <div className="mt-2">
                <span className="text-sm text-green-500 font-semibold">Available</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More button */}
      <div className="mt-8">
        <button
          onClick={() => {
            navigate('/doctors');
            scrollTo(0, 0);
          }}
          className="px-8 py-3 bg-primary text-white text-lg font-semibold rounded-full transition-all duration-300 ease-in-out hover:bg-blue-600 hover:scale-105"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default RelatedDoctor;
