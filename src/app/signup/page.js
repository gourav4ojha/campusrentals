// pages/signup.js
import Head from 'next/head';

export default function Signup() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black text-white shadow-[0px_15px_60px_#00FF7F]">
        <div className="w-full max-w-md p-8 space-y-6 shadow-2xl bg-gray-900 rounded-3xl relative">
          <h1 className="text-3xl font-bold text-center">CampusRental</h1>
          <form className="space-y-4">
            {/* Name Field */}
            <div className="relative group">
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md border border-gray-600 hover:border-gray-400 focus:ring-4 focus:ring-blue-500 focus:outline-none peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-black-200"
              >
                Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative group">
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md border border-gray-600 hover:border-gray-400 focus:ring-4 focus:ring-blue-500 focus:outline-none peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-black-500"
              >
                Email
              </label>
            </div>

            {/* Password Field */}
            <div className="relative group">
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md border border-gray-600 hover:border-gray-400 focus:ring-4 focus:ring-blue-500 focus:outline-none peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="password"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-black-500"
              >
                Password
              </label>
            </div>

            {/* OTP Field */}
            <div className="flex items-center gap-4">
              <div className="relative group flex-1">
                <input
                  type="number"
                  id="otp"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md border border-gray-600 hover:border-gray-400 focus:ring-4 focus:ring-blue-500 focus:outline-none peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="otp"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-black-500"
                >
                  OTP
                </label>
              </div>
              <button
                type="button"
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
    </>
  );
}
