import React, { useState } from "react";
import "./UserLogin.css";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios

function UserLogin() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  // Login form states
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginOtp, setLoginOtp] = useState("");
  const [loginOtpSent, setLoginOtpSent] = useState(false);
  // Signup form states
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupRePassword, setSignupRePassword] = useState("");
  const [signupOtp, setSignupOtp] = useState("");
  const [signupOtpSent, setSignupOtpSent] = useState(false);
  const [signupAge, setSignupAge] = useState("");
  const [signupGender, setSignupGender] = useState("");

  // Login form handlers
  const handleLoginSendOtp = async () => {
    // Make an API call to send OTP for login
    try {
      const response = await axios.post("https://loginslotsync.onrender.com/api/v1/auth/send-login-otp", {
        email: loginUsername,
      });
      console.log("Login OTP Response:", response.data); // Print the response data
      alert(response.data.message); // Show the response message from API
      setLoginOtpSent(true);
    } catch (error) {
      console.error("Error sending OTP", error);
      alert("Error sending OTP.");
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // Make an API call to verify the login credentials
    try {
      const response = await axios.post("https://loginslotsync.onrender.com/api/v1/auth/login", {
        username: loginUsername,
        password: loginPassword,
        otp: loginOtp,
      });
      console.log("Login Response:", response.data); // Print the response data
      alert(response.data.message); // Show the response message from API
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed: " + error.response?.data?.message);
    }
  };

  // Signup form handlers
  const handleSignupSendOtp = async () => {
    if (!signupEmail) {
      alert("Please enter a valid email to receive OTP");
      return;
    }
    try {
      const response = await axios.post("https://loginslotsync.onrender.com/api/v1/auth/send-signup-otp", {
        email: signupEmail,
      });
      console.log("Signup OTP Response:", response.data); // Print the response data
      alert(response.data.message); // Show the response message from API
      setSignupOtpSent(true);
    } catch (error) {
      console.error("Error sending OTP", error);
      alert("Error sending OTP.");
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (signupPassword !== signupRePassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!/^\d{6}$/.test(signupOtp)) {
      alert("OTP must be a 6-digit number!");
      return;
    }
    if (!signupAge || signupAge < 1 || signupAge > 120) {
      alert("Please enter a valid age between 1 and 120!");
      return;
    }
    if (!signupGender) {
      alert("Please select a gender!");
      return;
    }
    try {
      const response = await axios.post("https://loginslotsync.onrender.com/api/v1/auth/register", {
        username: signupName,
        email: signupEmail,
        password: signupPassword,
        otp: signupOtp,
        age: signupAge,
        gender: signupGender,
      });
      console.log("Signup Response:", response.data); // Print the response data
      alert(response.data.message); // Show the response message from API
    } catch (error) {
      console.error("Signup failed", error);
      alert("Signup failed: " + error.response?.data?.message);
    }
  };

  return (
    <div className="user-page-container">
      <div className="user-form-wrapper">
        <div className="user-login-container">
          <h2 className="user-login-title">
            {isLogin ? "User-Login" : "User-Sign Up"}
          </h2>

          {isLogin ? (
            // Login Form
            <form onSubmit={handleLoginSubmit}>
              <div className="user-form-group">
                <label className="user-form-label">Username</label>
                <input
                  type="text"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  className="user-form-input"
                  placeholder="Enter username"
                  required
                />
              </div>
              <div className="user-form-group">
                <label className="user-form-label">Password</label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="user-form-input"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="user-form-group">
                <label className="user-form-label">OTP</label>
                <div className="user-otp-group">
                  <input
                    type="text"
                    value={loginOtp}
                    onChange={(e) => setLoginOtp(e.target.value)}
                    className="user-form-input"
                    placeholder="Enter OTP"
                    disabled={!loginOtpSent}
                    required
                  />
                  <button
                    type="button"
                    onClick={handleLoginSendOtp}
                    className="user-otp-button"
                  >
                    Send OTP
                  </button>
                </div>
              </div>
              <button type="submit" className="user-login-button">
                Login
              </button>
            </form>
          ) : (
            // Signup Form
            <form onSubmit={handleSignupSubmit}>
              <div className="user-form-group">
                <label className="user-form-label">Name</label>
                <input
                  type="text"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  className="user-form-input"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="user-form-group">
                <label className="user-form-label">Email</label>
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  className="user-form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="user-form-group">
                <label className="user-form-label">Password</label>
                <input
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="user-form-input"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="user-form-group">
                <label className="user-form-label">Re-enter Password</label>
                <input
                  type="password"
                  value={signupRePassword}
                  onChange={(e) => setSignupRePassword(e.target.value)}
                  className="user-form-input"
                  placeholder="Re-enter password"
                  required
                />
              </div>
              <div className="user-form-group">
                <label className="user-form-label">OTP</label>
                <div className="user-otp-group">
                  <input
                    type="text"
                    value={signupOtp}
                    onChange={(e) => setSignupOtp(e.target.value)}
                    className="user-form-input"
                    placeholder="Enter 6-digit OTP"
                    disabled={!signupOtpSent}
                    required
                  />
                  <button
                    type="button"
                    onClick={handleSignupSendOtp}
                    className="user-otp-button"
                  >
                    Send OTP
                  </button>
                </div>
              </div>
              <div className="user-form-group">
                <label className="user-form-label">Age</label>
                <input
                  type="number"
                  value={signupAge}
                  onChange={(e) => setSignupAge(e.target.value)}
                  className="user-form-input"
                  placeholder="Enter your age"
                  min="1"
                  max="120"
                  required
                />
              </div>
              <div className="user-form-group">
                <label className="user-form-label">Gender</label>
                <select
                  value={signupGender}
                  onChange={(e) => setSignupGender(e.target.value)}
                  className="user-form-input"
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
              <button type="submit" className="user-signup-button">
                Sign Up
              </button>
            </form>
          )}
          <p className="user-toggle">
            {isLogin ? (
              <span>
                Don't have an account?{" "}
                <span onClick={() => setIsLogin(false)} className="user-toggle-link">
                  Sign Up
                </span>
              </span>
            ) : (
              <span>
                Already have an account?{" "}
                <span onClick={() => setIsLogin(true)} className="user-toggle-link">
                  Login
                </span>
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
