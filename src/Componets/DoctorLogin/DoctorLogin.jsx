import React, { useState } from 'react';
import './DoctorLogin.css';
import { useNavigate } from 'react-router-dom';

function DoctorLogin() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  // Login form states
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginOtp, setLoginOtp] = useState('');
  const [loginOtpSent, setLoginOtpSent] = useState(false);
  // Signup form states
  const [signupName, setSignupName] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupRePassword, setSignupRePassword] = useState('');
  const [signupExperience, setSignupExperience] = useState('');
  const [signupAbout, setSignupAbout] = useState('');
  const [signupSpecialization, setSignupSpecialization] = useState('');
  const [signupAge, setSignupAge] = useState('');
  const [signupGender, setSignupGender] = useState('');
  const [signupFees, setSignupFees] = useState('');
  const [signupAvailableDays, setSignupAvailableDays] = useState([]);
  const [signupAddress, setSignupAddress] = useState('');
  const [signupNumber, setSignupNumber] = useState('');
  const [signupDegree, setSignupDegree] = useState('');
  const [signupOtp, setSignupOtp] = useState('');
  const [signupOtpSent, setSignupOtpSent] = useState(false);

  const navigate = useNavigate();

  // Login form handlers
  const handleLoginSendOtp = () => {
    alert('OTP sent to your registered email/phone!');
    setLoginOtpSent(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Redirect to /doctorpage on login without passing data
    navigate('/doctorpage');
  };

  // Signup form handlers
  const handleSignupSendOtp = () => {
    if (!signupNumber) {
      alert('Please enter a valid phone number to receive OTP');
      return;
    }
    alert('OTP sent to your phone!');
    setSignupOtpSent(true);
  };

  const handleAvailableDaysChange = (e) => {
    const options = Array.from(e.target.selectedOptions, (option) => option.value);
    setSignupAvailableDays(options);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupPassword !== signupRePassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!/^\d{6}$/.test(signupOtp)) {
      alert('OTP must be a 6-digit number!');
      return;
    }
    if (!signupAge || signupAge < 18 || signupAge > 120) {
      alert('Please enter a valid age between 18 and 120!');
      return;
    }
    if (!signupGender) {
      alert('Please select a gender!');
      return;
    }
    if (!signupExperience || signupExperience < 0) {
      alert('Please enter valid years of experience (0 or more)!');
      return;
    }
    if (!signupFees || signupFees <= 0) {
      alert('Please enter valid consultation fees!');
      return;
    }
    if (signupAvailableDays.length === 0) {
      alert('Please select at least one available day!');
      return;
    }
    alert(
      `Signing up with Name: ${signupName}, Password: ${signupPassword}, Experience: ${signupExperience} years, About: ${signupAbout}, Specialization: ${signupSpecialization}, Age: ${signupAge}, Gender: ${signupGender}, Fees: ${signupFees}, Available Days: ${signupAvailableDays.join(', ')}, Address: ${signupAddress}, Phone: ${signupNumber}, Degree: ${signupDegree}, OTP: ${signupOtp}`
    );
  };

  return (
    <div className="doctor-page-container">
      {/* <h1 className="doctor-page-logo">SlotSync</h1> */}
      <div className="doctor-form-wrapper">
        <div className="doctor-login-container">
          <h2 className="doctor-login-title">{isLogin ? 'Doctor Login' : 'Doctor Sign Up'}</h2>

          {isLogin ? (
            // Login Form
            <form onSubmit={handleLoginSubmit}>
              <div className="doctor-form-group">
                <label className="doctor-form-label">Username</label>
                <input
                  type="text"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  className="doctor-form-input"
                  placeholder="Enter username"
                  required
                />
              </div>
              <div className="doctor-form-group">
                <label className="doctor-form-label">Password</label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="doctor-form-input"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="doctor-form-group">
                <label className="doctor-form-label">OTP</label>
                <div className="doctor-otp-group">
                  <input
                    type="text"
                    value={loginOtp}
                    onChange={(e) => setLoginOtp(e.target.value)}
                    className="doctor-form-input"
                    placeholder="Enter OTP"
                    disabled={!loginOtpSent}
                    required
                  />
                  <button
                    type="button"
                    onClick={handleLoginSendOtp}
                    className="doctor-otp-button"
                  >
                    Send OTP
                  </button>
                </div>
              </div>
              <button type="submit" className="doctor-login-button">
                Login
              </button>
            </form>
          ) : (
            // Signup Form
            <form onSubmit={handleSignupSubmit}>
              <div className="doctor-form-group">
                <label className="doctor-form-label">Name</label>
                <input
                  type="text"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  className="doctor-form-input"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="doctor-form-group">
                <label className="doctor-form-label">Password</label>
                <input
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="doctor-form-input"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="doctor-form-group">
                <label className="doctor-form-label">Re-enter Password</label>
                <input
                  type="password"
                  value={signupRePassword}
                  onChange={(e) => setSignupRePassword(e.target.value)}
                  className="doctor-form-input"
                  placeholder="Re-enter password"
                  required
                />
              </div>
              <div className="doctor-form-group">
                <label className="doctor-form-label">Years of Experience</label>
                <input
                  type="number"
                  value={signupExperience}
                  onChange={(e) => setSignupExperience(e.target.value)}
                  className="doctor-form-input"
                  placeholder="Enter years of experience"
                  min="0"
                  required
                />
              </div>
              <div className="doctor-form-group">
                <label className="doctor-form-label">About</label>
                <textarea
                  value={signupAbout}
                  onChange={(e) => setSignupAbout(e.target.value)}
                  className="doctor-form-input"
                  placeholder="Describe yourself"
                  rows="4"
                  required
                />
              </div>
              <div className="doctor-form-group">
                <label className="doctor-form-label">Specialization</label>
                <input
                  type="text"
                  value={signupSpecialization}
                  onChange={(e) => setSignupSpecialization(e.target.value)}
                  className="doctor-form-input"
                  placeholder="Enter your specialization (e.g., Cardiologist)"
                  required
                />
              </div>
              <div className="doctor-form-group">
                <label className="doctor-form-label">Age</label>
                <input
                  type="number"
                  value={signupAge}
                  onChange={(e) => setSignupAge(e.target.value)}
                  className="doctor-form-input"
                  placeholder="Enter your age"
                  min="18"
                  max="120"
                  required
                />
              </div>
              <div className="doctor-form-group">
                <label className="doctor-form-label">Gender</label>
                <select
                  value={signupGender}
                  onChange={(e) => setSignupGender(e.target.value)}
                  className="doctor-form-input"
                  required
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="doctor-form-group">
                <label className="doctor-form-label">Consultation Fees</label>
                <input
                  type="number"
                  value={signupFees}
                  onChange={(e) => setSignupFees(e.target.value)}
                  className="doctor-form-input"
                  placeholder="Enter fees (e.g., 500)"
                  min="1"
                  required
                />
              </div>
              <div className="doctor-form-group">
                <label className="doctor-form-label">Available Days</label>
                <select
                  multiple
                  value={signupAvailableDays}
                  onChange={handleAvailableDaysChange}
                  className="doctor-form-input"
                  required
                >
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>
              <div className="doctor-form-group">
                <label className="doctor-form-label">Address</label>
                <input
                  type="text"
                  value={signupAddress}
                  onChange={(e) => setSignupAddress(e.target.value)}
                  className="doctor-form-input"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div className="doctor-form-group">
                <label className="doctor-form-label">Phone Number</label>
                <input
                  type="tel"
                  value={signupNumber}
                  onChange={(e) => setSignupNumber(e.target.value)}
                  className="doctor-form-input"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="doctor-form-group">
                <label className="doctor-form-label">Degree</label>
                <input
                  type="text"
                  value={signupDegree}
                  onChange={(e) => setSignupDegree(e.target.value)}
                  className="doctor-form-input"
                  placeholder="Enter your degree (e.g., MBBS, MD)"
                  required
                />
              </div>
              <div className="doctor-form-group">
                <label className="doctor-form-label">OTP</label>
                <div className="doctor-otp-group">
                  <input
                    type="text"
                    value={signupOtp}
                    onChange={(e) => setSignupOtp(e.target.value)}
                    className="doctor-form-input"
                    placeholder="Enter 6-digit OTP"
                    disabled={!signupOtpSent}
                    required
                  />
                  <button
                    type="button"
                    onClick={handleSignupSendOtp}
                    className="doctor-otp-button"
                  >
                    Send OTP
                  </button>
                </div>
              </div>
              <button type="submit" className="doctor-login-button">
                Sign Up
              </button>
            </form>
          )}

          {/* Links */}
          <div className="doctor-link-container">
            <a href="#" className="doctor-link">
              Forgot Password?
            </a>
          </div>
          <div className="doctor-link-container">
            <p>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <a
                href="#"
                className="doctor-link"
                onClick={(e) => {
                  e.preventDefault();
                  setIsLogin(!isLogin);
                }}
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorLogin;