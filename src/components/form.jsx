"use client";

import Image from 'next/image';
import React from 'react';
import usernameIcon from '../assets/icons/Icon.png';
import callIcon from '../assets/icons/callIcon.png';
import emailIcon from '../assets/icons/email.png';
import messageIcon from '../assets/icons/message.png';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10,15}$/, 'Invalid phone number (10-15 digits)')
    .required('Phone number is required'),
  message: yup.string().required('Message is required'),
});

const Form = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset 
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      toast.success('Form submitted successfully!');
      reset();
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error('Submission failed. Please try again.');
    }
    
  };

  return (
    <div id="contact" className="relative p-4 mb-4 mt-20">
      {/* Toast Container should be in root layout */}
      <ToastContainer />

      <div className="relative mt-15">
        <div className="flex flex-col justify-center items-center">
          <p className="text-8xl sm:text-9xl text-blue-700 opacity-5 font-black text-center uppercase dark:text-white/20">
            contacts
          </p>
          <h1 className="text-4xl text-blue-900 font-bold text-center z-20 relative capitalize mt-4 sm:mt-8 dark:text-gray-300">
            get in touch now
          </h1>
        </div>
      </div>

      <div className="relative text-center mt-10 mb-8">
        <p className="font-medium text-base text-bluePText dark:text-gray-400">
          We have developed a unique space where you can work and create.
          <br className="hidden sm:block" /> We thought of everything to the smallest detail.
          <br className="hidden sm:block" /> You will be able to conduct your business, hold meetings
        </p>
      </div>

      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[670px]">
          <div className="space-y-6">
            {/* Name Row */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label className="relative block">
                  <input
                    {...register('firstName')}
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-xl py-4 px-6 shadow-md dark:bg-gray-600 dark:text-white"
                  />
                  <Image
                    src={usernameIcon}
                    alt=""
                    className="w-5 h-5 absolute right-5 top-1/2 -translate-y-1/2"
                  />
                </label>
                {errors.firstName && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              <div className="flex-1">
                <label className="relative block">
                  <input
                    {...register('lastName')}
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-xl py-4 px-6 shadow-md dark:bg-gray-600 dark:text-white"
                  />
                  <Image
                    src={usernameIcon}
                    alt=""
                    className="w-5 h-5 absolute right-5 top-1/2 -translate-y-1/2"
                  />
                </label>
                {errors.lastName && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            {/* Contact Row */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label className="relative block">
                  <input
                    {...register('email')}
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl py-4 px-6 shadow-md dark:bg-gray-600 dark:text-white"
                  />
                  <Image
                    src={emailIcon}
                    alt=""
                    className="w-5 h-4 absolute right-5 top-1/2 -translate-y-1/2"
                  />
                </label>
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex-1">
                <label className="relative block">
                  <input
                    {...register('phoneNumber')}
                    id="phoneNumber"
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-xl py-4 px-6 shadow-md dark:bg-gray-600 dark:text-white"
                  />
                  <Image
                    src={callIcon}
                    alt=""
                    className="w-5 h-5 absolute right-5 top-1/2 -translate-y-1/2"
                  />
                </label>
                {errors.phoneNumber && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="relative block">
                <input
                  {...register('message')}
                  id="message"
                  type="text"
                  placeholder="Your Message"
                  className="w-full rounded-xl py-4 px-6 shadow-md dark:bg-gray-600 dark:text-white"
                />
                <Image
                  src={messageIcon}
                  alt=""
                  className="w-5 h-5 absolute right-5 top-1/2 -translate-y-1/2"
                />
              </label>
              {errors.message && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-12 py-3 bg-[#3361FF] hover:bg-[#11266e] rounded-[30px] text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Send Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;