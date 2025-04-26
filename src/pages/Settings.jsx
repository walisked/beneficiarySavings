import React from "react";

const Settings = () => {
  return (
    <div className="w-full h-full bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Account Settings</h2>

        {/* Profile Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Profile Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Password Change */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Change Password</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="password"
              placeholder="Current Password"
              className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="New Password"
              className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="text-right">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
