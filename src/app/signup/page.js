"use client";

import { useState } from "react";

export default function Signup() {
  const [inputUser, setinputUser] = useState({
    name: "",
    email: "",
    password: "",
    otp: "", // Added OTP to the state
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setinputUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendOTP = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: inputUser.email }),
      });
      const result = await response.json();
      if (result.success) {
        alert("OTP sent successfully!");
      } else {
        alert(result.error || "Failed to send OTP.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("An error occurred while sending the OTP. Please try again.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await fetch(`http://localhost:3000/api/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputUser),
      });

      const response = await result.json();

      if (response.success) {
        alert("Sign up successful!");
      } else {
        alert(response.error || "Sign up failed!");
      }
    } catch (error) {
      console.error("Sign Up Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white shadow-[0px_15px_60px_#00FF7F]">
      <div className="w-full max-w-md p-8 space-y-6 shadow-2xl bg-gray-900 rounded-3xl relative">
        <h1 className="text-3xl font-bold text-center">CampusRental</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="relative group">
            <input
              type="text"
              id="name"
              name="name"
              value={inputUser.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md border border-gray-600 hover:border-gray-400 focus:ring-4 focus:ring-blue-500 focus:outline-none peer"
              placeholder="Name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative group">
            <input
              type="email"
              id="email"
              name="email"
              value={inputUser.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md border border-gray-600 hover:border-gray-400 focus:ring-4 focus:ring-blue-500 focus:outline-none peer"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative group">
            <input
              type="password"
              id="password"
              name="password"
              value={inputUser.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md border border-gray-600 hover:border-gray-400 focus:ring-4 focus:ring-blue-500 focus:outline-none peer"
              placeholder="Password"
              required
            />
          </div>

          {/* OTP Field */}
          <div className="flex items-center gap-4">
            <div className="relative group flex-1">
              <input
                type="text"
                id="otp"
                name="otp"
                value={inputUser.otp}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md border border-gray-600 hover:border-gray-400 focus:ring-4 focus:ring-blue-500 focus:outline-none peer"
                placeholder="Enter OTP"
                required
              />
            </div>
            <button
              type="button"
              onClick={sendOTP}
              className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transform transition-transform duration-200 hover:-translate-y-1"
            >
              Send OTP
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg font-bold bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transform transition-transform duration-200 hover:-translate-y-1"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
