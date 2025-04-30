import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import DoctorImage from '../assets/doc1.png';

// Dummy data for appointments with fees
const dummyAppointments = [
  {
    _id: 'dummy1',
    docData: {
      name: 'Dr. Anil Malhotra',
      speciality: 'Neurologist',
      image: DoctorImage,
      address: { line1: 'City Plaza', line2: 'Sultanpur, Uttar Pradesh' },
      fees: 1500, // Added fees in INR
    },
    slotDate: '30_03_2025',
    slotTime: '10:00 AM',
    cancelled: false,
    payment: false,
    isCompleted: false,
  },
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Utility to format date (e.g., 20_01_2000 => 20 Jan 2000)
const slotDateFormat = (slotDate) => {
  const [day, month, year] = slotDate.split('_');
  return `${day} ${months[Number(month) - 1]} ${year}`;
};

// Appointment Card Component
const AppointmentCard = ({ appointment, paymentId, setPayment, onCancel, onPayRazorpay, onPayStripe }) => {
  const { docData, slotDate, slotTime, cancelled, payment, isCompleted, _id } = appointment;

  return (
    <div className="flex flex-col sm:flex-row gap-8 py-8 border-b bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <img
        className="w-48 h-48 object-cover rounded-xl bg-gray-100"
        src={docData.image}
        alt={`${docData.name}'s profile`}
      />
      <div className="flex-1 text-lg text-gray-600">
        <h3 className="text-3xl font-semibold text-gray-800">{docData.name}</h3>
        <p className="text-xl text-gray-500">{docData.speciality}</p>
        <p className="font-medium text-gray-700 mt-4 text-xl">Address:</p>
        <p className="text-lg">{docData.address.line1}</p>
        <p className="text-lg">{docData.address.line2}</p>
        <p className="mt-4 text-lg">
          <span className="font-medium text-gray-700 text-xl">Fees:</span> ₹{docData.fees}
        </p>
        <p className="mt-4 text-lg">
          <span className="font-medium text-gray-700 text-xl">Date & Time:</span>{' '}
          {slotDateFormat(slotDate)} | {slotTime}
        </p>
      </div>
      <div className="flex flex-col gap-4 text-lg">
        {!cancelled && !payment && !isCompleted && paymentId !== _id && (
          <button
            onClick={() => setPayment(_id)}
            className="px-6 py-3 bg-green-50 text-green-600 border border-green-200 rounded-lg hover:bg-green-100 transition-colors text-lg"
            aria-label={`Initiate payment for appointment with ${docData.name}`}
          >
            Pay Online
          </button>
        )}
        {!cancelled && !payment && !isCompleted && paymentId === _id && (
          <>
            <button
              onClick={() => onPayStripe(_id)}
              className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 flex items-center justify-center gap-3 text-lg"
              aria-label={`Pay with Stripe for appointment with ${docData.name}`}
            >
              <img className="h-7" src={assets.stripe_logo} alt="Stripe" />
              Pay with Stripe
            </button>
            <button
              onClick={() => onPayRazorpay(_id)}
              className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 flex items-center justify-center gap-3 text-lg"
              aria-label={`Pay with Razorpay for appointment with ${docData.name}`}
            >
              <img className="h-7" src={assets.razorpay_logo} alt="Razorpay" />
              Pay with Razorpay
            </button>
          </>
        )}
        {!cancelled && payment && !isCompleted && (
          <button
            className="px-6 py-3 bg-green-50 text-green-600 border border-green-200 rounded-lg text-lg"
            disabled
            aria-label="Payment completed"
          >
            Paid
          </button>
        )}
        {isCompleted && (
          <button
            className="px-6 py-3 bg-green-50 text-green-600 border border-green-200 rounded-lg text-lg"
            disabled
            aria-label="Appointment completed"
          >
            Completed
          </button>
        )}
        {!cancelled && !isCompleted && (
          <button
            onClick={() => onCancel(_id)}
            className="px-6 py-3 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition-colors text-lg"
            aria-label={`Cancel appointment with ${docData.name}`}
          >
            Cancel Appointment
          </button>
        )}
        {cancelled && !isCompleted && (
          <button
            className="px-6 py-3 bg-red-50 text-red-600 border border-red-200 rounded-lg text-lg"
            disabled
            aria-label="Appointment cancelled"
          >
            Cancelled
          </button>
        )}
      </div>
    </div>
  );
};

AppointmentCard.propTypes = {
  appointment: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    docData: PropTypes.shape({
      name: PropTypes.string.isRequired,
      speciality: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      address: PropTypes.shape({
        line1: PropTypes.string.isRequired,
        line2: PropTypes.string.isRequired,
      }).isRequired,
      fees: PropTypes.number.isRequired, // Added fees prop type
    }).isRequired,
    slotDate: PropTypes.string.isRequired,
    slotTime: PropTypes.string.isRequired,
    cancelled: PropTypes.bool.isRequired,
    payment: PropTypes.bool.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  paymentId: PropTypes.string,
  setPayment: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onPayRazorpay: PropTypes.func.isRequired,
  onPayStripe: PropTypes.func.isRequired,
};

// Main Component
const MyAppointments = () => {
  const { backendUrl, token } = useContext(AppContext);
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [payment, setPayment] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with dummy data
    setTimeout(() => {
      setAppointments(dummyAppointments);
      setIsLoading(false);
    }, 500);
  }, []);

  const cancelAppointment = async (appointmentId) => {
    if (appointmentId.startsWith('dummy')) {
      toast.info('Cannot cancel dummy appointment');
      return;
    }
    toast.error('Cancellation not available for dummy data');
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Appointment Payment',
      description: 'Appointment Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);
        toast.error('Payment verification not available for dummy data');
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const appointmentRazorpay = async (appointmentId) => {
    if (appointmentId.startsWith('dummy')) {
      toast.info('Payment not available for dummy appointment');
      return;
    }
    toast.error('Razorpay payment not available for dummy data');
  };

  const appointmentStripe = async (appointmentId) => {
    if (appointmentId.startsWith('dummy')) {
      toast.info('Payment not available for dummy appointment');
      return;
    }
    toast.error('Stripe payment not available for dummy data');
  };

  return (
    <div className="w-[70%] h-1/2 mx-auto p-8 bg-gray-50 rounded-xl shadow-lg overflow-y-auto">
      <h2 className="text-4xl font-semibold text-gray-800 border-b pb-6 mb-8">My Appointments</h2>
      {isLoading ? (
        <p className="text-2xl text-gray-600">Loading appointments...</p>
      ) : appointments.length === 0 ? (
        <p className="text-2xl text-gray-600">No appointments found.</p>
      ) : (
        <div className="space-y-6">
          {appointments.map((appointment) => (
            <AppointmentCard
              key={appointment._id}
              appointment={appointment}
              paymentId={payment}
              setPayment={setPayment}
              onCancel={cancelAppointment}
              onPayRazorpay={appointmentRazorpay}
              onPayStripe={appointmentStripe}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;