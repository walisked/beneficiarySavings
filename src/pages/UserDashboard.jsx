import React from "react";
import { Routes, Route } from "react-router-dom";
import DefaultDashboard from "./UserDDashboard";
import CalendarWallet from "./Wallet";
import Settings from "./Settings"; // Import the Settings component
import Logout from "./Logout"; // Import the Logout component

const UserDashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultDashboard />} />
      <Route path="wallet" element={<CalendarWallet />} />
      <Route path="settings" element={<Settings />} /> {/* Settings Route */}
      <Route path="logout" element={<Logout />} /> {/* Logout Route */}
    </Routes>
  );
};

export default UserDashboard;
