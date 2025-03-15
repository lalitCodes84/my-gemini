import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterLoginDropdown() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    navigate("/register"); // Ensure path matches App.js route
  };

  const handleLogin = (e) => {
    navigate("/login"); // Ensure path matches App.js route
  };

  return (
    <div className="text-[#2e3e4d] w-full px-4 flex justify-between font-bold">
      <button type="button" className="cursor-pointer" onClick={handleRegister}>
        REGISTER
      </button>
      <button className="cursor-pointer" onClick={handleLogin}>
        LOGIN
      </button>
    </div>
  );
}

export default RegisterLoginDropdown;
