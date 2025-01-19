"use client";

import Image from "next/image";
import { useState } from "react";
import { MdLogout } from "react-icons/md";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="w-full h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between fixed top-0 z-[100]">
      <div className="flex ml-10 items-center gap-2">
        <span className="text-xl font-bold text-blue-600">Helping Hands</span>
      </div>

      <div className="  ">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-10 h-10 rounded-full  mr-10 bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
        >
          <span className="text-lg font-semibold text-gray-700">U</span>
        </button>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
            <button
              onClick={() => {
                // Add signout logic here
                console.log("Signing out...");
              }}
              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2 rounded-lg"
            >
              <MdLogout size={20} />
              <span>Sign Out</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
