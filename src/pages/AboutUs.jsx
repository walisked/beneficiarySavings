import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title Section */}
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          At <span className="font-semibold text-indigo-600 dark:text-indigo-400">Akafta</span>, we believe in the power of community-driven financial empowerment.
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-12 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* What We Offer */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">What We Offer</h2>
          <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              ✅ <span className="ml-2">Group Savings & Contributions</span>
            </li>
            <li className="flex items-center">
              ✅ <span className="ml-2">Secure Digital Wallet</span>
            </li>
            <li className="flex items-center">
              ✅ <span className="ml-2">Verified Marketplace</span>
            </li>
            <li className="flex items-center">
              ✅ <span className="ml-2">Real-Time Monitoring</span>
            </li>
          </ul>
        </div>

        {/* Our Mission & Vision */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Our Mission & Vision</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            We aim to bridge the financial gap by fostering a secure and transparent ecosystem for financial growth.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl mx-auto mt-12 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg p-8 text-center shadow-lg transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-bold">Why Choose Us?</h2>
        <div className="mt-4 space-y-3 text-lg">
          <p>🔹 Security First – Advanced encryption & fraud detection</p>
          <p>🔹 Seamless & Automated – Smart contributions & tracking</p>
          <p>🔹 User-Centric – Intuitive, mobile-friendly interface</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-700 transition-all">
          Join Us Today 🚀
        </button>
      </div>
    </div>
  );
};

export default About;
