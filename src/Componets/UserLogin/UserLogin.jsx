import React, { useState } from "react";
import "./UserLogin.css";
import { Link, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  // Login form handlers
  const handleLoginSendOtp = () => {
    // Simulate OTP sent without API
    setLoginOtpSent(true);
    alert("OTP sent to your email.");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Redirect to /home on login without passing data
    navigate("/home");
  };

  // Signup form handlers
  const handleSignupSendOtp = () => {
    if (!signupEmail) {
      alert("Please enter a valid email to receive OTP");
      return;
    }
    // Simulate OTP sent without API
    setSignupOtpSent(true);
    alert("OTP sent to your email.");
  };

  const handleSignupSubmit = (e) => {
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
    alert("Sign up successful!");
  };

  const handleForgotPassword = () => {
    alert("Forgot Password functionality is not implemented yet.");
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
          <p className="user-toggle text-center">
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
          <button
            type="button"
            className="user-forgot-password-button"
            onClick={handleForgotPassword}
          >
            Forgot Password
          </button>
          <button
            type="button"
            className="user-doctor-login-button"
            onClick={() => navigate("/doctorlogin")}
          >
            If you are a doctor, click here
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;