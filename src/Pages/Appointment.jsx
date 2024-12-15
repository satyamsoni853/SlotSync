import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctor from "../Componets/RelatedDoctor";
// import { FaCheckCircle } from "react-icons/fa";  // Verified Icon
import { FaCheckCircle } from "react-icons/fa";

function Appointment() {
  const { docID } = useParams();
  const { doctors, CurrencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUES", "WED", "THU", "FRI", "SAT"];

  const [DocInfo, setDocInfo] = useState(null);
  const [DoctorSlots, setDoctorSlots] = useState([]);
  const [slotIndex, setslotIndex] = useState(0);
  const [slotTime, setslotTime] = useState("");

  const fetchDocInfo = () => {
    const docInfo = doctors?.find((doc) => doc._id === docID);
    setDocInfo(docInfo);
  };

  const GetAvailableSlot = () => {
    setDoctorSlots([]);
    let today = new Date();
    const slots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      let endtime = new Date(currentDate);
      endtime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeslot = [];
      while (currentDate < endtime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeslot.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      slots.push(timeslot);
    }

    setDoctorSlots(slots);
  };

  useEffect(() => {
    if (DocInfo) {
      GetAvailableSlot();
    }
  }, [DocInfo]);

  useEffect(() => {
    if (doctors && docID) {
      fetchDocInfo();
    }
  }, [doctors, docID]);

  if (!DocInfo) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Doctor Info Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg">
        <div className="flex items-center space-x-6">
          {/* Doctor Image */}
          <div className="w-32 h-32 bg-gray-100 rounded-full overflow-hidden flex justify-center items-center">
            <img
              src={DocInfo.image}
              alt={DocInfo.name}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Doctor Details */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 flex items-center">
              {DocInfo.name}{" "}
              {DocInfo.isVerified && (
                <FaCheckCircle className="ml-2 text-green-500" />
              )}
            </h2>
            <p className="text-gray-600 text-lg">
              {DocInfo.degree} - {DocInfo.speciality}
            </p>
            <p className="text-gray-500 text-sm">
              {DocInfo.experience} of experience
            </p>
            {/* <p>{DocInfo.verified_icon.svg}</p> */}
          </div>
        </div>

        {/* About Doctor Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">About</h3>
          <p className="text-gray-600 mt-2">{DocInfo.about}</p>
        </div>

        {/* Appointment Fee */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xl font-semibold text-gray-800">
            Appointment Fee
          </span>
          <span className="text-xl font-bold text-primary">
            {CurrencySymbol}
            {DocInfo.fees}
            
          </span>
        </div>
      </div>

      {/* Available Slots Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Available Slots
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {DoctorSlots.length > 0 &&
            DoctorSlots.map((item, index) => (
              <div
                key={index}
                onClick={() => setslotIndex(index)}
                className={`text-center py-4 px-6 bg-gray-50 rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary hover:text-white ${
                  slotIndex === index
                    ? "bg-primary text-black"
                    : "border border-gray-300"
                }`}
              >
                <p className="text-lg font-semibold">
                  {daysOfWeek[item[0]?.datetime.getDay()]}
                </p>
                <p className="text-xl font-semibold">
                  {item[0]?.datetime.getDate()}
                </p>
              </div>
            ))}
        </div>

        {/* Slot Times */}
        <div className="mt-6">
          {DoctorSlots.length > 0 && (
            <div className="flex gap-4 overflow-x-auto">
              {DoctorSlots[slotIndex].map((item, index) => (
                <div
                  key={index}
                  onClick={() => setslotTime(item.time)}
                  className={`py-2 px-4 rounded-lg cursor-pointer text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-600 hover:bg-primary hover:text-white"
                  }`}
                >
                  {item.time}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          {/* Book Appointment Button */}
          <button className="bg-primary text-white text-xl font-semibold py-3 px-12 rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600">
            Book Appointment
          </button>

          {/* Chat with Doctor Button */}
          <button className="bg-green-500 text-white text-xl font-semibold py-3 px-12 rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-green-600">
            Chat with Doctor
          </button>

          {/* Call with Doctor Button */}
          <button className="bg-yellow-500 text-white text-xl font-semibold py-3 px-12 rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-yellow-600">
            Call with Doctor
          </button>

          {/* Set Reminder Button */}
          <button className="bg-purple-500 text-white text-xl font-semibold py-3 px-12 rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-purple-600">
            Set Reminder
          </button>

          {/* Video Call with Doctor Button */}
          <button className="bg-red-500 text-white text-xl font-semibold py-3 px-12 rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-red-600">
            Video Call with Doctor
          </button>
        </div>
      </div>

      {/* Related Doctor Section */}
      <div className="mt-12">
        <RelatedDoctor docID={docID} speciality={DocInfo.speciality} />
      </div>
    </div>
  );
}

export default Appointment;
