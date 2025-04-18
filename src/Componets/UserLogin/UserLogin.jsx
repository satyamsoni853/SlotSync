import React, { useState } from "react";
import "./UserLogin.css";
import { Link } from "react-router-dom";

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
  const handleLoginSendOtp = () => {
    alert("OTP sent to your registered email/phone!");
    setLoginOtpSent(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(
      `Logging in with Username: ${loginUsername}, Password: ${loginPassword}, OTP: ${loginOtp}`
    );
  };

  // Signup form handlers
  const handleSignupSendOtp = () => {
    if (!signupEmail) {
      alert("Please enter a valid email to receive OTP");
      return;
    }
    alert("OTP sent to your email!");
    setSignupOtpSent(true);
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
    alert(
      `Signing up with Name: ${signupName}, Email: ${signupEmail}, Password: ${signupPassword}, OTP: ${signupOtp}, Age: ${signupAge}, Gender: ${signupGender}`
    );
  };

  return (
    <div className="user-page-container">
      {/* <h1 className="user-page-logo">SlotSync</h1> */}
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
              <button type="submit" className="user-login-button">
                Sign Up
              </button>
            </form>
          )}

          {/* Links and Buttons */}
          <div className="user-link-container">
            <a href="#" className="user-link">
              Forgot Password?
            </a>
          </div>
          <div className="user-link-container">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <a
                href="#"
                className="user-link"
                onClick={(e) => {
                  e.preventDefault();
                  setIsLogin(!isLogin);
                }}
              >
                {isLogin ? "Sign Up" : "Login"}
              </a>
            </p>
          </div>
          <div className="user-link-container">
            <Link to="/DoctorLogin" className="user-doctor-button">
              If you are a doctor, login or signup here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
