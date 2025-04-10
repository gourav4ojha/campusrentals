"use client"
import { useState } from "react";

export default function smartadd() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    return (
        <>
            <div className="text-sm font-bold relative inline-block text-left">
                <div>
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                    >
                        <svg
                      className="w-6 h-6 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                            <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                        </svg>
                        <span className="ml-2 text-sm font-medium">Smart Add</span>
                    </button>
                </div>

                {isOpen && (
                    <div       //flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                        className="origin-top-right absolute right-0 mt-2 w-full rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
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
        </>
    )
}