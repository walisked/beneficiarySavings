import { useState } from "react";
import {
  FaTachometerAlt,
  FaBox,
  FaCheckCircle,
  FaClipboardList,
  FaStore,
  FaChartBar,
  FaShieldAlt,
} from "react-icons/fa";

const Sidebar = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-800"} text-white ${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300`}
    >
      {/* Collapse/Expand Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="p-3 focus:outline-none">
        {isOpen ? "⬅️" : "➡️"}
      </button>

      {/* Sidebar Menu Items */}
      <ul className="mt-4 space-y-4">
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <FaTachometerAlt />
          {isOpen && <span>Dashboard</span>}
        </li>
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <FaBox />
          {isOpen && <span>Products</span>}
        </li>
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <FaCheckCircle />
          {isOpen && <span>Approvals</span>}
        </li>
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <FaClipboardList />
          {isOpen && <span>Orders</span>}
        </li>
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <FaStore />
          {isOpen && <span>Marketplace</span>}
        </li>
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <FaChartBar />
          {isOpen && <span>Reports</span>}
        </li>
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <FaShieldAlt />
          {isOpen && <span>Audits</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;