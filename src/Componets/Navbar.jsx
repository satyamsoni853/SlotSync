/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const Navigate = useNavigate();
  const [Showmenu, setShowmenu] = useState(false); // State to control menu visibility
  const [Token, setToken] = useState(true);
  const [showChat, setShowChat] = useState(false); // State to toggle AI chat visibility
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [stage, setStage] = useState('name'); // 'name', 'age', 'chat'
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'ai', message: 'Hey, I am SlotSync AI! Tell me your name.' },
  ]);

  // Toggle the dropdown menu visibility on click
  const toggleMenu = () => {
    setShowmenu(!Showmenu);
  };

  // Toggle AI chat visibility
  const toggleChat = () => {
    setShowChat(!showChat);
    if (!showChat) {
      // Reset chat state when opening
      setName('');
      setAge('');
      setStage('name');
      setSelectedQuestion('');
      setChatHistory([{ sender: 'ai', message: 'Hey, I am SlotSync AI! Tell me your name.' }]);
    }
  };

  // AI Chat Questions and Answers
  const questionsAndAnswers = [
    { question: 'How do I book a doctor’s appointment?', answer: `Log in to your account, ${name}, go to the booking section, search for a doctor by specialization or location, select an available time slot, and confirm your appointment. You’ll receive a confirmation email or notification.` },
    { question: 'Can I book an appointment for today?', answer: `Yes, ${name}, if a doctor has available slots today, you can book them. Check the doctor’s calendar in the booking section for real-time availability.` },
    { question: 'How do I find a doctor by specialization?', answer: `Use the search feature, ${name}, select the specialization (e.g., Cardiologist, Pediatrician), and filter by location or availability to see matching doctors.` },
    { question: 'What if no slots are available for my preferred doctor?', answer: `You can join the waitlist, ${name}, for your preferred doctor or choose another doctor with similar specialization and available slots.` },
    { question: 'How do I reschedule an appointment?', answer: `Go to your booked appointments, ${name}, select the appointment, choose “Reschedule,” pick a new slot from the doctor’s calendar, and confirm.` },
    { question: 'Can I cancel my appointment?', answer: `Yes, ${name}, navigate to your booked appointments, select the appointment, and click “Cancel.” You’ll receive a cancellation confirmation.` },
    { question: 'Will I get a refund if I cancel?', answer: `Refunds depend on the doctor’s cancellation policy, ${name}, visible during booking. Check the policy or contact support for details.` },
    { question: 'How do I know if my appointment is confirmed?', answer: `You’ll receive a confirmation email or in-app notification, ${name}, once the appointment is booked. Check your “Booked Appointments” section.` },
    { question: 'Can I book an appointment for someone else?', answer: `Yes, ${name}, during booking, enter the patient’s details in the provided fields, and the appointment will be booked under their name.` },
    { question: 'How do I check a doctor’s availability?', answer: `Search for the doctor, ${name}, and their calendar will display available time slots for the next 7 days. Select a slot to book.` },
    { question: 'What are the consultation fees for a doctor?', answer: `Fees are listed on the doctor’s profile page, ${name}, during booking. They vary by specialization and experience.` },
    { question: 'Can I book a video consultation?', answer: `Yes, ${name}, select “Video Consultation” when booking, and choose an available slot. Ensure you have a stable internet connection.` },
    { question: 'How do I get appointment reminders?', answer: `Enable push notifications or email reminders in your account settings, ${name}. You’ll get alerts 24 hours and 1 hour before your appointment.` },
    { question: 'What if I miss my appointment?', answer: `Missed appointments may incur a no-show fee, ${name}, depending on the doctor’s policy. Check the policy or contact support.` },
    { question: 'Can I see patient reviews for a doctor?', answer: `Yes, ${name}, doctor profiles include patient reviews and ratings to help you choose the right professional.` },
    { question: 'How do I search for doctors in my area?', answer: `Enter your location in the search bar, ${name}, and filter by specialization or availability to find local doctors.` },
    { question: 'What if I need an urgent appointment?', answer: `Use the “Urgent Care” filter, ${name}, to find doctors with same-day or next-day slots for immediate needs.` },
    { question: 'Can I book multiple appointments at once?', answer: `Yes, ${name}, book each appointment separately through the booking section, selecting different slots or doctors.` },
    { question: 'How do I contact a doctor before my appointment?', answer: `Use the in-app messaging feature, ${name}, to send a message to the doctor, available on their profile page.` },
    { question: 'Is my personal data secure?', answer: `Yes, ${name}, we use HIPAA-compliant encryption to protect your data, ensuring confidentiality and security.` },
    { question: 'Can I book an appointment without registering?', answer: `No, ${name}, you must register and log in to book an appointment, ensuring secure access to your booking history.` },
    { question: 'How do I update my profile information?', answer: `Go to your account settings, ${name}, edit your personal details (e.g., name, contact info), and save the changes.` },
    { question: 'What happens if a doctor cancels my appointment?', answer: `You’ll be notified, ${name}, and you can reschedule with the same doctor or choose another. Refunds may apply per the policy.` },
    { question: 'Can I book an appointment for a specific time?', answer: `Yes, ${name}, select an exact time slot from the doctor’s available calendar during booking.` },
    { question: 'How do I know which doctors are online?', answer: `Doctors with video consultation slots are marked as “Online” in the search results, ${name}.` },
    { question: 'Can I book a follow-up appointment?', answer: `Yes, ${name}, go to your past appointments, select the doctor, and book a follow-up slot.` },
    { question: 'What if I enter the wrong details during booking?', answer: `Cancel the appointment and rebook with the correct details, ${name}, or contact support to amend it.` },
    { question: 'How do I pay for my appointment?', answer: `Pay via credit/debit card or e-wallet during booking, ${name}. Payment details are securely stored for future use.` },
    { question: 'Can I get a prescription after my appointment?', answer: `Yes, ${name}, doctors can issue e-prescriptions, accessible in your appointment history or sent via email.` },
    { question: 'How do I upload medical documents?', answer: `In your profile, ${name}, use the “Upload Documents” feature to submit test results or medical records for your doctor.` },
    { question: 'What if the app shows no doctors available?', answer: `Try broadening your search, ${name}, (e.g., different specialization or location) or check back later for new slots.` },
    { question: 'Can I book an appointment for a child?', answer: `Yes, ${name}, enter the child’s details as the patient during booking, and select a pediatrician if needed.` },
    { question: 'How do I verify a doctor’s qualifications?', answer: `Doctor profiles display degrees, certifications, and affiliations, ${name}, verified by our platform.` },
    { question: 'Can I schedule recurring appointments?', answer: `Currently, ${name}, book each appointment individually. We’re working on recurring booking support.` },
    { question: 'What if I need to change my appointment time?', answer: `Reschedule by selecting your appointment, ${name}, and choosing a new slot from the doctor’s calendar.` },
    { question: 'How do I give feedback about a doctor?', answer: `After your appointment, ${name}, rate and review the doctor in the “Booked Appointments” section.` },
    { question: 'Can I book an appointment in another city?', answer: `Yes, ${name}, search by the desired city and select a doctor with available slots.` },
    { question: 'What if I don’t receive an OTP for login?', answer: `Check your spam folder or request a new OTP, ${name}. Contact support if the issue persists.` },
    { question: 'How do I know if a doctor offers home visits?', answer: `Doctors offering home visits are marked on their profile, ${name}. Check availability during booking.` },
    { question: 'Can I book an appointment for a lab test?', answer: `Yes, ${name}, select “Lab Test” in the booking section, choose a lab, and pick a slot.` },
    { question: 'How do I check my booking history?', answer: `Go to your account, ${name}, and view past and upcoming appointments in the “Booked Appointments” section.` },
    { question: 'What if my payment fails during booking?', answer: `Try again with a different payment method, ${name}, or contact support for assistance.` },
    { question: 'Can I book an appointment for an emergency?', answer: `Use the “Urgent Care” filter for immediate slots, ${name}, or contact emergency services for critical cases.` },
    { question: 'How do I find a doctor with low fees?', answer: `Use the “Sort by Fees” filter in the search results, ${name}, to find affordable doctors.` },
    { question: 'Can I book an appointment without paying upfront?', answer: `Some doctors offer pay-at-clinic options, ${name}, visible during booking. Check the doctor’s profile.` },
    { question: 'What if the doctor is late for my appointment?', answer: `Contact support, ${name}, and we’ll coordinate with the doctor to reschedule or provide updates.` },
    { question: 'How do I add a doctor to my favorites?', answer: `On the doctor’s profile, ${name}, click “Add to Favorites” to save them for quick access.` },
    { question: 'Can I book an appointment in multiple languages?', answer: `The app supports multilingual booking, ${name}. Set your preferred language in account settings.` },
    { question: 'How do I report an issue with my booking?', answer: `Contact support via the in-app help center or email, ${name}, providing your booking details.` },
    { question: 'What if I need help navigating the app?', answer: `Use the in-app help center for tutorials, ${name}, or contact support for personalized assistance.` },
  ];

  // Handle name submission
  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter your name.');
      return;
    }
    setChatHistory([
      ...chatHistory,
      { sender: 'user', message: name },
      { sender: 'ai', message: `Tell me your age, ${name}.` },
    ]);
    setStage('age');
  };

  // Handle age submission
  const handleAgeSubmit = (e) => {
    e.preventDefault();
    if (!age || age < 1 || age > 120) {
      alert('Please enter a valid age between 1 and 120.');
      return;
    }
    setChatHistory([...chatHistory, { sender: 'user', message: age }]);
    setStage('chat');
  };

  // Handle question submission
  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (!selectedQuestion) return;
    const selectedQA = questionsAndAnswers.find((qa) => qa.question === selectedQuestion);
    if (selectedQA) {
      setChatHistory([
        ...chatHistory,
        { sender: 'user', message: selectedQA.question },
        { sender: 'ai', message: selectedQA.answer },
      ]);
      setSelectedQuestion('');
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-300 px-4 lg:px-8">
        {/* Logo */}
        <img
          onClick={() => Navigate("/home")}
          className="w-32 md:w-44 cursor-pointer"
          src={assets.logo}
          alt="Logo"
        />

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {["/home", "/doctor", "/about", "/contact"].map((path, index) => (
            <NavLink
              to={path}
              key={index}
              className={({ isActive }) =>
                `py-1 ${
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : "hover:text-primary"
                }`
              }
            >
              {path === "/home"
                ? "Home"
                : path.slice(1, 2).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}
        </ul>

        {/* User Section */}
        <div className="flex items-center gap-4">
          {Token ? (
            <div className="relative">
              {/* Profile Icon */}
              <div
                onClick={toggleMenu}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={assets.profile_pic}
                  alt="Profile"
                />
              </div>

              {/* Dropdown Menu */}
              {Showmenu && (
                <div className="absolute right-0 top-12 bg-white shadow-md rounded-lg z-10">
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      Navigate("/MyProfile");
                    }}
                    className="hover:text-primary cursor-pointer px-4 py-2"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      Navigate("/MyAppointment");
                    }}
                    className="hover:text-primary cursor-pointer px-4 py-2"
                  >
                    My Appointment
                  </p>
                  <p
                    onClick={() => setToken(false)}
                    className="hover:text-primary cursor-pointer px-4 py-2"
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => Navigate("/login")}
              className="bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block hover:bg-opacity-90 transition-all"
            >
              Create Account
            </button>
          )}
        </div>
      </div>

      {/* Fixed AI Chat Button */}
      <div
        className="fixed bottom-5 right-5 bg-primary text-white py-2 px-6 rounded-full shadow-md cursor-pointer z-20"
        onClick={toggleChat}
      >
        AI Chat
      </div>

      {/* AI Chat Popup */}
      {showChat && (
        <div className="ai-chat-container">
          <div className="ai-chat-header">
            <h2 className="ai-chat-title">SlotSync AI Chat</h2>
            <button className="ai-close-button" onClick={toggleChat}>
              ×
            </button>
          </div>
          <div className="ai-chat-history">
            {chatHistory.map((chat, index) => (
              <div key={index} className="ai-chat-message">
                {chat.sender === 'ai' ? (
                  <div className="ai-bot-message">{chat.message}</div>
                ) : (
                  <div className="ai-user-message">{chat.message}</div>
                )}
              </div>
            ))}
          </div>
          {stage === 'name' && (
            <form onSubmit={handleNameSubmit} className="ai-form">
              <div className="ai-form-group">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="ai-form-input"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <button type="submit" className="ai-form-button">
                Submit Name
              </button>
            </form>
          )}
          {stage === 'age' && (
            <form onSubmit={handleAgeSubmit} className="ai-form">
              <div className="ai-form-group">
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="ai-form-input"
                  placeholder="Enter your age"
                  min="1"
                  max="120"
                  required
                />
              </div>
              <button type="submit" className="ai-form-button">
                Submit Age
              </button>
            </form>
          )}
          {stage === 'chat' && (
            <form onSubmit={handleQuestionSubmit} className="ai-question-form">
              <div className="ai-form-group">
                <select
                  value={selectedQuestion}
                  onChange={(e) => setSelectedQuestion(e.target.value)}
                  className="ai-form-input"
                >
                  <option value="" disabled>
                    Choose a question
                  </option>
                  {questionsAndAnswers.map((qa, index) => (
                    <option key={index} value={qa.question}>
                      {qa.question}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="ai-question-button">
                Ask Question
              </button>
            </form>
          )}
        </div>
      )}

      {/* Inline AI Chat Styles */}
      <style>
        {`
          /* AI Chat Container */
          .ai-chat-container {
            position: fixed;
            bottom: 70px;
            right: 20px;
            width: 400px;
            max-height: 600px;
            background: #ffffff;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 30;
            overflow: hidden;
            display: flex;
            flex-direction: column;
          }

          /* Top-to-Bottom Background Animation */
          .ai-chat-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 300%;
            background: linear-gradient(
              to bottom,
              transparent 0%,
              rgba(144, 238, 144, 0.3) 25%,
              #90ee90 50%,
              rgba(144, 238, 144, 0.3) 75%,
              transparent 100%
            );
            opacity: 0.5;
            animation: slideDown 8s linear infinite;
            z-index: -1;
            pointer-events: none;
            will-change: transform;
          }

          @keyframes slideDown {
            0% {
              transform: translateY(-66.67%);
            }
            100% {
              transform: translateY(33.33%);
            }
          }

          /* Chat Header */
          .ai-chat-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 1rem;
            background: #f7fafc;
            border-bottom: 1px solid #e2e8f0;
          }

          /* Chat Title */
          .ai-chat-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: #333333;
            margin: 0;
          }

          /* Close Button */
          .ai-close-button {
            background: none;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
            color: #4a5568;
          }

          .ai-close-button:hover {
            color: #90ee90;
          }

          /* Chat History */
          .ai-chat-history {
            flex-grow: 1;
            max-height: 250px;
            overflow-y: auto;
            padding: 1rem;
            background: #ffffff;
          }

          /* Chat Messages */
          .ai-chat-message {
            margin-bottom: 0.75rem;
          }

          .ai-user-message {
            background: #90ee90;
            color: #ffffff;
            padding: 0.5rem;
            border-radius: 0.375rem 0.375rem 0 0.375rem;
            margin-left: 1rem;
            text-align: right;
            max-width: 80%;
          }

          .ai-bot-message {
            background: #e2e8f0;
            color: #333333;
            padding: 0.5rem;
            border-radius: 0.375rem 0.375rem 0.375rem 0;
            margin-right: 1rem;
            text-align: left;
            max-width: 80%;
          }

          /* Form */
          .ai-form,
          .ai-question-form {
            padding: 0 1rem 1rem;
          }

          /* Form Group */
          .ai-form-group {
            margin-bottom: 0.75rem;
          }

          /* Form Input */
          .ai-form-input {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #e2e8f0;
            border-radius: 0.375rem;
            font-size: 0.9rem;
            color: #333333;
            transition: border-color 0.2s, box-shadow 0.2s;
          }

          .ai-form-input:focus {
            outline: none;
            border-color: #90ee90;
            box-shadow: 0 0 0 2px rgba(144, 238, 144, 0.3);
          }

          .ai-form-input::placeholder {
            color: #a0aec0;
          }

          /* Form and Question Buttons */
          .ai-form-button,
          .ai-question-button {
            width: 100%;
            background: #90ee90;
            color: #ffffff;
            padding: 0.5rem;
            border: none;
            border-radius: 0.375rem;
            font-size: 0.9rem;
            cursor: pointer;
            transition: background-color 0.2s;
          }

          .ai-form-button:hover,
          .ai-question-button:hover {
            background: #77dd77;
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;