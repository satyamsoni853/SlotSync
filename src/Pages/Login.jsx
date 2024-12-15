import React, { useState } from "react";

function Login() {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSumbitHandler = async (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {/* Heading */}
        <p className="text-2xl font-bold text-primary text-center mb-6">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>

        {/* Full Name Input */}
        {state === "Sign Up" && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Full Name</p>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your full name"
            />
          </div>
        )}

        {/* Email Input */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Email</p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={onSumbitHandler}
          className="w-full p-3 bg-primary text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Toggle Between Login and Sign Up */}
        <p className="text-sm text-center text-gray-500 mt-4">
          {state === "Sign Up" ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
            className="text-primary cursor-pointer hover:underline"
          >
            {state === "Sign Up" ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </form>
  );
}

export default Login;
