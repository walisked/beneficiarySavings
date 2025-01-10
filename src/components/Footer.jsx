import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 p-6">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
        <li>
          <a href="#" className="hover:underline hover:text-white">
            FAQs
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline hover:text-white">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline hover:text-white">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline hover:text-white">
            Terms & Conditions
          </a>
        </li>
      </ul>

      {/* Copyright Text */}
      <p className="text-sm text-center md:text-right">
        &copy; {new Date().getFullYear()} Akafta. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
