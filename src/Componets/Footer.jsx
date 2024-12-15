import React from 'react';


function Footer() {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm text-gray-300">
              We connect patients with trusted doctors to provide a seamless appointment experience. Your health is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-400">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-blue-400">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>Email: <a href="mailto:doctor@example.com" className="hover:text-blue-400">satyamsoni853@com</a></li>
              <li>Phone: <a href="tel:+919876543210" className="hover:text-blue-400">+91 9696050128</a></li>
              <li>Address: BTM Layout Stage 2, Bengaluru, India</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Slot Sync Doctor Appointment System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
