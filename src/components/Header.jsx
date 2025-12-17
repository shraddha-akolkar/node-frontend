import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const linkStyle = (path) =>
    `px-6 py-2 rounded-full font-semibold transition-all ${
      location.pathname === path
        ? "bg-[#75619D] text-white"
        : "text-[#F4E2D1] hover:bg-[#75619D] hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#3F2A52] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#F4E2D1] tracking-wide">
          TO-DO APPLICATION
        </h1>

        <div className="flex gap-4">
          <Link to="/login" className={linkStyle("/login")}>
            Login
          </Link>
          <Link to="/register" className={linkStyle("/register")}>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
