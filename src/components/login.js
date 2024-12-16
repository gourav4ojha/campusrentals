"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import usernameIcon from "../assets/icons/usernameIcon.png";
import passwordIcon from "../assets/icons/passwordIcon.png";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      console.log("Login Data: ", data);
      toast.success("Login Successful!");
    } catch (error) {
      console.error("Login Error: ", error);
      toast.error("Login Failed. Try Again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="relative bg-gray-800 shadow-2xl rounded-3xl p-10 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username Field */}
          <div className="mb-6 relative">
            <label htmlFor="username" className="block text-sm mb-2">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full p-4 rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                {...register("username")}
              />
              <Image
                src={usernameIcon}
                alt="Username Icon"
                className="absolute right-4 top-4 w-6 h-6"
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-sm mt-2">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-4 rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                {...register("password")}
              />
              <Image
                src={passwordIcon}
                alt="Password Icon"
                className="absolute right-4 top-4 w-6 h-6"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-all focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none"
          >
            {submitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Don’t have an account?{"         "}
        <a
          href="/signup"
          className="text-blue-500 hover:underline hover:text-blue-400"
        >
          Sign up here
        </a>
      </p>
      <p className="text-gray-400 mt-2">
        Forgot your password?{" "}
        <a
          href="/forgot-password"
          className="text-blue-500 hover:underline hover:text-blue-400"
        >
          Reset it here
        </a>
      </p>
    </div>
  </div>
  {/* Toast Notifications */}
  <ToastContainer />
</div>
  )
}

