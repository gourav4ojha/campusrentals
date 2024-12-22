"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import searchIcon from '../../src/assets/icons/search.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Cookies from 'js-cookie'; // Import Cookies for handling token

const verifyToken = async () => {
  const Token = Cookies.get('token');
  
  if (!Token) return null;

  const response = await fetch('http://localhost:3000/api/users', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${Token}` // Get token from cookies
    },
  });

  const data = await response.json();
  return data.user ? data.user._id : null;
};

const fetchUserData = async () => {
  const userId = await verifyToken();   
  if (!userId) return null;
  const response = await fetch(`http://localhost:3000/api/users/${userId}`);
  const data = await response.json();
  console.log('user', data)
  return data.result;
};

const Header = () => {
  const [header, setHeader] = useState(false);
  const [headerColor, setHeaderColor] = useState('transparent');
  const [headerText, setHeaderText] = useState('white');
  const [user, setUser] = useState(null);

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

  // Fetch user data if token exists
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await fetchUserData();
      if (userData) setUser(userData);
    };

    fetchUser();
  }, []);

  const handleHeader = () => {
    setHeader(!header);
  };

  const handleMobileHeader = () => {
    setHeader(false);
  };
  console.log('user', user)
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
