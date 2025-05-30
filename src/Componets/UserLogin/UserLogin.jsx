import React, { useState } from "react";
import "./UserLogin.css";
import { Link, useNavigate } from "react-router-dom";

function UserLogin() {
  const [isLogin, setIsLogin] = useState(true);
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
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // API base URL
  const API_BASE_URL = "https://auth-system-latest-73y5.onrender.com/api/auth";

  // Login form handlers
  const handleLoginSendOtp = async () => {
    try {
      const payload = {
        username: loginUsername,
        password: loginPassword,
      };
      console.log("Login Request Payload:", payload);
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log("Login Response:", data);
      if (response.ok) {
        setLoginOtpSent(true);
        alert("OTP sent to your email.");
      } else {
        setError(data.message || "Failed to send OTP.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Login Error:", err);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: loginUsername,
          otp: loginOtp,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Login successful!");
        navigate("/home");
      } else {
        setError(data.message || "Invalid OTP.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  // Signup form handlers
  const handleSignupSendOtp = async () => {
    if (!signupEmail) {
      setError("Please enter a valid email to receive OTP.");
      return;
    }
    try {
      const payload = {
        name: signupName,
        email: signupEmail,
        password: signupPassword,
        reEnteredPassword: signupRePassword,
        age: parseInt(signupAge),
        gender: signupGender,
      };
      console.log("Signup Request Payload:", payload);
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log("Signup Response:", data);
      if (response.ok) {
        setSignupOtpSent(true);
        alert("OTP sent to your email.");
      } else {
        setError(data.message || "Failed to send OTP.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Signup Error:", err);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (signupPassword !== signupRePassword) {
      setError("Passwords do not match!");
      return;
    }
    if (!/^\d{6}$/.test(signupOtp)) {
      setError("OTP must be a 6-digit number!");
      return;
    }
    if (!signupAge || signupAge < 1 || signupAge > 120) {
      setError("Please enter a valid age between 1 and 120!");
      return;
    }
    if (!signupGender) {
      setError("Please select a gender!");
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: signupEmail,
          otp: signupOtp,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Sign up successful!");
        setIsLogin(true);
      } else {
        setError(data.message || "Invalid OTP.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  const handleResendOtp = async () => {
    try {
      const email = signupEmail || loginUsername;
      if (!email) {
        setError("Please provide an email to resend OTP.");
        return;
      }
      const url = `${API_BASE_URL}/resend-otp?email=${encodeURIComponent(email)}`;
      console.log("Resend OTP Request URL:", url);
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log("Resend OTP Response:", data);
      if (response.ok) {
        alert("OTP resent to your email.");
      } else {
        setError(data.message || "Failed to resend OTP.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Resend OTP Error:", err);
    }
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
          {error && <p className="user-error-message">{error}</p>}

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
              {loginOtpSent && (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="user-resend-otp-button"
                >
                  Resend OTP
                </button>
              )}
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
              {signupOtpSent && (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="user-resend-otp-button"
                >
                  Resend OTP
                </button>
              )}
              <button type="submit" className="user-signup-button">
                Sign Up
              </button>
            </form>
          )}
          <p className="user-toggle text-center">
            {isLogin ? (
              <span>
                Don't have an account?{" "}
                <span
                  onClick={() => setIsLogin(false)}
                  className="user-toggle-link"
                >
                  Sign Up
                </span>
              </span>
            ) : (
              <span>
                Already have an account?{" "}
                <span
                  onClick={() => setIsLogin(true)}
                  className="user-toggle-link"
                >
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