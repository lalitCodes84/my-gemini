import React from "react";
import { Link } from "react-router-dom"; // Import Link
import menuItems from "../utils/menuItems";

function Navbar() {
  return (
    <nav className="flex justify-between p-4 fixed w-full bg-[#263238] items-center top-0 ">
      <span className=" p-1 font-extrabold text-2xl">G-Gemini</span>
      <div className="flex gap-10 text-blue-50 ">
        {menuItems.map((menu, index) => (
          <Link
            key={index}
            to={menu.path}
            className="hover:text-gray-600 hover:underline"
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
