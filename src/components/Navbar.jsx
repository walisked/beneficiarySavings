import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  // Handle logout action
  const handleLogout = () => {
    dispatch(logout());
    navigate("/"); // Navigate to Home page
  };

  // Handle login action
  const handleLogin = () => {
    navigate("/login"); // Navigate to Login page
  };

  // Determine if on Home page
  const isHomePage = location.pathname === "/";

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Brand */}
        <a href="/" className="text-2xl font-bold">
          Akafta
        </a>

        {/* Hamburger menu for mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row lg:space-x-6 lg:items-center w-full lg:w-auto`}
        >
          <a href="/" className="block py-2 px-4 hover:text-yellow-500">
            Home
          </a>
          <a
            href="/communities"
            className="block py-2 px-4 hover:text-yellow-500"
          >
            Communities
          </a>
          <Link to="/wallet" className="block py-2 px-4 hover:text-yellow-500">
            Wallet
          </Link>
          <a href="/signup" className="block py-2 px-4 hover:text-yellow-500">
            Sign Up
          </a>

          {/* Dropdown */}
          <div className="relative group">
            <button className="block py-2 px-4 hover:text-yellow-500">
              More
            </button>
            <div className="absolute hidden group-hover:block bg-gray-700 text-white rounded-md shadow-lg">
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-600">
                About
              </Link>
              <Link to="/ContactPage" className="block px-4 py-2 hover:bg-gray-600">
                ContactUs
              </Link>
              <Link to="/terms" className="block px-4 py-2 hover:bg-gray-600">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Conditional Button */}
          {isHomePage ? (
            <button
              onClick={handleLogin}
              className="mt-2 lg:mt-0 py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="mt-2 lg:mt-0 py-2 px-4 bg-red-500 hover:bg-red-600 rounded-lg text-white"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
