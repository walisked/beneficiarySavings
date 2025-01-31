import React from "react";

const Sidebar = ({ selected, setSelected }) => {
  const menuItems = [
    { label: "Dashboard Home", key: "home" },
    { label: "API Management", key: "apiManagement" },
    { label: "Analytics", key: "analytics" },
    { label: "Refund Requests", key: "refundRequests" },
    { label: "User Communication", key: "userCommunication" },
  ];

  return (
    <div className="bg-gray-800 text-white h-full w-64 p-4">
      <h2 className="text-xl font-bold mb-6">Director Dashboard</h2>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item.key}
            className={`cursor-pointer p-2 rounded-lg ${
              selected === item.key ? "bg-blue-500" : "hover:bg-gray-700"
            }`}
            onClick={() => setSelected(item.key)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
