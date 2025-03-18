// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import menuItems from "../utils/menuItems";
// import RegisterLoginDropdown from "./RegisterLoginDropdown";

// function Navbar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (!event.target.closest(".dropdown-container")) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("click", handleOutsideClick);
//     return () => {
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, []);

//   return (
//     <nav className="flex justify-between p-2 fixed w-full bg-[#2e3e4d] items-center top-0 px-16 z-50">
//       <span className="p-1 font-extrabold text-2xl text-[#e5fdfa]">
//         G-GEMINI
//       </span>
//       <div className="flex gap-10 text-blue-50 relative">
//         {menuItems.map((menu, index) => (
//           <div key={index} className={`relative dropdown-container`}>
//             <Link
//               to={menu.path}
//               className="hover:text-gray-600 hover:underline cursor-pointer"
//               onClick={(e) => {
//                 if (menu.name === "Register/Login") {
//                   e.preventDefault(); // Prevent navigation only for "Register/Login"
//                   setIsDropdownOpen(!isDropdownOpen);
//                 }
//               }}
//             >
//               {menu.name}
//             </Link>

//             {/* Dropdown Menu */}
//             {menu.name === "Register/Login" && isDropdownOpen && (
//               <div className="absolute top-11 right-0 bg-white shadow-md rounded-md w-60 p-2">
//                 <RegisterLoginDropdown />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menuItems from "../utils/menuItems";
import RegisterLoginDropdown from "./RegisterLoginDropdown";
import { Menu, X } from "lucide-react"; // For hamburger icons

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For hamburger toggle

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

      {/* Hamburger Icon (Visible on Small Screens) */}
      <div className="lg:hidden cursor-pointer text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Menu Items (Show/Hide Based on Hamburger Toggle) */}
      <div
        className={`absolute top-12 left-0 w-full bg-[#2e3e4d] flex flex-col items-center gap-4 p-4 lg:flex lg:flex-row lg:static lg:w-auto lg:gap-10 lg:p-0 lg:text-blue-50 ${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex`}
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
              }}
            >
              {menu.name}
            </Link>

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
