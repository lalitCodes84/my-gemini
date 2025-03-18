import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the hamburger menu
import menuItems from "../utils/menuItems";
import RegisterLoginDropdown from "./RegisterLoginDropdown";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For Hamburger Menu

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
    <nav className="flex justify-between p-2 fixed w-full bg-[#2e3e4d] items-center top-0 px-4 md:px-16 z-50">
      <span className="block w-[100%] p-1 font-bold text-2xl text-[#e5fdfa] ">G-Gemini</span>

      {/* Hamburger Icon for Mobile View */}
      <div className="md:hidden cursor-pointer text-[#e5fdfa]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* Menu Items */}
      <div
        className={`absolute md:static top-16 left-0 w-full bg-[#2e3e4d] flex flex-col md:flex-row gap-4 md:gap-10 text-blue-50 items-center md:items-start md:justify-end px-4 py-2 md:p-0 ${
          isMenuOpen ? "flex" : "hidden md:flex"
        }`}
      >
        {menuItems.map((menu, index) => (
          <div key={index} className={`relative dropdown-container`}>
            <Link
              to={menu.path}
              className="hover:text-gray-600 hover:underline cursor-pointer"
              onClick={(e) => {
                if (menu.name === "Register/Login") {
                  e.preventDefault();
                  setIsDropdownOpen(!isDropdownOpen);
                }
                if (isMenuOpen) setIsMenuOpen(false); // Close menu after clicking a link
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

        {/* Register & Login Buttons */}
        <div className="flex flex-col gap-2 w-full items-center md:hidden">
          <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded-md w-[80%] text-center">Register</Link>
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md w-[80%] text-center">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
