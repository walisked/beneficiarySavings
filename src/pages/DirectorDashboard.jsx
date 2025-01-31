import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import APIManagement from '../components/APIManagement';
const DirectorDashboard = () => {
  const [selected, setSelected] = useState("home");

  const renderContent = () => {
    switch (selected) {
      case "apiManagement":
        return <APIManagement />;
      // Add cases for other components
      default:
        return <div>Home Content</div>; // Default content
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar selected={selected} setSelected={setSelected} />
        <main className="flex-1 p-6">{renderContent()}</main>
      </div>
      <Footer />
    </div>
  );
};

export default DirectorDashboard;