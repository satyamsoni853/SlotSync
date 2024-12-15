/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form Submitted:", formData);
    // Add backend or email integration here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 lg:px-16">
      {/* Title Section */}
      <h1 className="text-3xl font-bold text-gray-800 text-center">Contact Us</h1>
      <p className="text-center text-gray-600 mt-2">
        Have a question? Feel free to reach out to us.
      </p>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-green-600 font-medium">Thank you for reaching out! We'll get back to you soon.</p>
          )}
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600">
              Reach us at the following details, or drop by our office.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-blue-600">
                  <i className="fas fa-envelope"></i>
                </span>
                <p className="text-gray-800">Satyamsoni853#gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-600">
                  <i className="fas fa-phone"></i>
                </span>
                <p className="text-gray-800">+91 9696050128</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-600">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <p className="text-gray-800">BTM Layout Stage 2, Bengaluru, India</p>
              </div>
            </div>
          </div>

          {/* Google Map Placeholder */}
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62234.21147764746!2d77.5507836!3d12.9165757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1502dd5c5f97%3A0x3ed1e816a8f1f7e!2sBTM%20Layout%20Stage%202%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="250"
              className="border rounded-md"
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
