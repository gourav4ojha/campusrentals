"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import searchIcon from '../../src/assets/icons/search.png';
import Cookies from 'js-cookie'; // Import Cookies for handling token

// Function to verify the token and fetch user data
const verifyToken = async () => {
  const Token = Cookies.get('token');  
  if (!Token) return null;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${Token}` // Get token from cookies
      },
    });

    const data = await response.json();
    // console.log("user data", data);
    return data.user;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

const Header = () => {
  // State management for header and user data
  const [header, setHeader] = useState(false);
  const [headerColor, setHeaderColor] = useState('transparent');
  const [headerText, setHeaderText] = useState('white');
  const [user, setUser] = useState(null);

  // Fetch user data if token exists
  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await verifyToken();
      if (userData) {
        setUser(userData);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array to run the effect once on mount

  // Handle header color change on scroll
  useEffect(() => {
    const handleColorChange = () => {
      if (window.scrollY >= 250) {
        setHeaderColor('linear-gradient(to right, #8e2de2, #4a00e0)');
        setHeaderText('#ffffff');
      } else {
        setHeaderColor('transparent');
        setHeaderText('#ffffff');
      }
    };

    window.addEventListener('scroll', handleColorChange);
    return () => window.removeEventListener('scroll', handleColorChange); // Cleanup
  }, []);

  const handleHeader = () => {
    setHeader(!header);
  };

  const handleMobileHeader = () => {
    setHeader(false);
  };

  // Dropdown 
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div
      style={{ background: `${headerColor}` }}
      className="fixed top-0 left-0 w-full h-20 shadow-xl flex justify-between items-center z-40 ease-in duration-300"
    >
      {/* Menu + Name */}
      <div className="max-w-[1240px] m-5 flex justify-between items-center p-4">
        <Link href="/">
          <h1
            style={{ color: `${headerText}` }}
            className="py-2 text-2xl font-bold hover:text-orange-500"
          >
            CampusRentals
          </h1>
        </Link>
      </div>

      {/* Search */}
      <div className="hidden ml-1 sm:flex">
        <Image src={searchIcon} alt="Search" className="w-4 h-4 self-center" />
        <input
          type="text"
          placeholder="Search"
          maxLength="20"
          className="w-40 bg-transparent outline-none placeholder-gray-300 mx-4 py-2 text-white capitalize"
        />
      </div>

      {/* Navbar Links */}
      <ul
        style={{ color: `${headerText}` }}
        className="text-sm font-bold hidden sm:flex"
      >
        <li className="p-4 hover:text-red-600">
          <Link href="/livinglinks">LivingLink</Link>
        </li>
        <li className="p-4 hover:text-red-600">
          <Link href="/gowheels">GoWheels</Link>
        </li>
        <li className="p-4 hover:text-red-600">
          <Link href="/getintuch">Get In Touch</Link>
        </li>
      </ul>

       {/* // Smart Add  */}
      <div className="text-sm font-bold relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md p-3 hover:text-red-600 border-gray-100 shadow-sm px-4 py-2 text-white font-medium text-gray-700 focus:outline-none"
        >
          Smart Add
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1">
            <a
              href="/smartadd/addproperty"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Add Property
            </a>
            <a
              href="/smartadd/addvehical"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Add vehicle
            </a>
                     </div>
        </div>
      )}
    </div>

   

      {/* Conditional User Links */}
      <div className="mr-10">
        <ul style={{ color: `${headerText}` }} className="text-sm font-bold hidden sm:flex">
          {user ? (
            <>
              <li className="p-4 hover:text-red-600">
                <Link href="/profile">{user.name}</Link>
              </li>
              <li className="p-4 hover:text-red-600">
                <Link href="/profile">{user.profile}</Link>
              </li>
            </>
          ) : (
            <>
              <li className="p-4 hover:text-red-600">
                <Link href="/login">Login</Link>
              </li>
              <li className="p-4 hover:text-red-600">
                <Link href="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          header
            ? 'sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
            : 'sm:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
        }
      >
        <ul style={{ color: `${headerText}` }} className="text-sm font-bold">
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="/livinglinks" onClick={handleMobileHeader}>
              LivingLinks
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="/gowheels" onClick={handleMobileHeader}>
              GoWheels
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="/getintuch" onClick={handleMobileHeader}>
              Get In Touch
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
