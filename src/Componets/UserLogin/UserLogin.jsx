import React, { useState } from "react";
import "./UserLogin.css";
import { useNavigate } from "react-router-dom";

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
  // Common states
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Base API URL
  const API_BASE_URL = "https://auth-system-latest-73y5.onrender.com/api/auth";

  // Login form handlers
  const handleLoginSendOtp = async () => {
    if (!loginUsername || !loginPassword) {
      setError("Please enter both username and password");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: loginUsername,
          password: loginPassword,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to send OTP");
      }
      setLoginOtpSent(true);
      alert("OTP sent to your email.");
    } catch (err) {
      setError(err.message || "An error occurred while sending OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!loginOtpSent) {
      setError("Please request an OTP first");
      return;
    }
    if (!/^\d{6}$/.test(loginOtp)) {
      setError("OTP must be a 6-digit number");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginUsername, // Assuming username is email for OTP verification
          otp: loginOtp,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "OTP verification failed");
      }
      alert("Login successful!");
      navigate("/home");
    } catch (err) {
      setError(err.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  // Signup form handlers
  const handleSignupSendOtp = async () => {
    if (!signupEmail) {
      setError("Please enter a valid email to receive OTP");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: signupName,
          email: signupEmail,
          password: signupPassword,
          age: parseInt(signupAge),
          gender: signupGender,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to send OTP");
      }
      setSignupOtpSent(true);
      alert("OTP sent to your email.");
    } catch (err) {
      setError(err.message || "An error occurred while sending OTP");
    } finally {
      setLoading(false);
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
    setError("");
    setLoading(true);
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
      if (!response.ok) {
        throw new Error(data.message || "OTP verification failed");
      }
      alert("Sign up successful!");
      setIsLogin(true); // Switch to login form after successful signup
    } catch (err) {
      setError(err.message || "An error occurred during signup");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!signupEmail) {
      setError("Please enter an email to resend OTP");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/resend-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: signupEmail }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to resend OTP");
      }
      alert("OTP resent to your email.");
    } catch (err) {
      setError(err.message || "An error occurred while resending OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    const email = prompt("Please enter your email to reset password:");
    if (!email) {
      setError("Email is required to reset password");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/resend-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to send reset OTP");
      }
      alert("Reset OTP sent to your email.");
    } catch (err) {
      setError(err.message || "An error occurred during password reset");
    } finally {
      setLoading(false);
    }
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
                  disabled={loading}
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
                  disabled={loading}
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
                    disabled={!loginOtpSent || loading}
                    required
                  />
                  <button
                    type="button"
                    onClick={handleLoginSendOtp}
                    className="user-otp-button"
                    disabled={loading}
                  >
                    Send OTP
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="user-login-button"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
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
                    disabled={!signupOtpSent || loading}
                    required
                  />
                  <button
                    type="button"
                    onClick={handleSignupSendOtp}
                    className="user-otp-button"
                    disabled={loading}
                  >
                    Send OTP
                  </button>
                  {signupOtpSent && (
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      className="user-otp-button"
                      disabled={loading}
                    >
                      Resend OTP
                    </button>
                  )}
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
                  disabled={loading}
                />
              </div>
              <div className="user-form-group">
                <label className="user-form-label">Gender</label>
                <select
                  value={signupGender}
                  onChange={(e) => setSignupGender(e.target.value)}
                  className="user-form-input"
                  required
                  disabled={loading}
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button
                type="submit"
                className="user-signup-button"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign Up"}
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
            disabled={loading}
          >
            Forgot Password
          </button>
          <button
            type="button"
            className="user-doctor-login-button"
            onClick={() => navigate("/doctorlogin")}
            disabled={loading}
          >
            If you are a doctor, click here
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;