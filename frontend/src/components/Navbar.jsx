import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menuItems from "../utils/menuItems";
import RegisterLoginDropdown from "./RegisterLoginDropdown";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="flex justify-between p-2 fixed w-full bg-[#2e3e4d] items-center top-0 px-16 z-50">
      <span className="p-1 font-extrabold text-2xl text-[#e5fdfa]">
        G-GEMINI
      </span>
      <div className="flex gap-10 text-blue-50 relative">
        {menuItems.map((menu, index) => (
          <div key={index} className={`relative dropdown-container`}>
            <Link
              to={menu.path}
              className="hover:text-gray-600 hover:underline cursor-pointer"
              onClick={(e) => {
                if (menu.name === "Register/Login") {
                  e.preventDefault(); // Prevent navigation only for "Register/Login"
                  setIsDropdownOpen(!isDropdownOpen);
                }
              }}
            >
              {menu.name}
            </Link>

            {/* Dropdown Menu */}
            {menu.name === "Register/Login" && isDropdownOpen && (
              <div className="absolute top-11 right-0 bg-white shadow-md rounded-md w-60 p-2">
                <RegisterLoginDropdown />
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
