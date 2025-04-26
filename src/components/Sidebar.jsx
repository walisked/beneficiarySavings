import { useState } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaFileInvoice,
  FaTasks,
  FaComments,
  FaUserPlus,
  FaChartLine,
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
        {/* Onboarding */}
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <FaUserPlus />
          {isOpen && <span>Onboarding</span>}
        </li>

        {/* Dashboard */}
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <FaTachometerAlt />
          {isOpen && <span>Dashboard</span>}
        </li>

        {/* Customers */}
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <FaUsers />
          {isOpen && <span>Customers</span>}
        </li>

        {/* Financials */}
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <FaFileInvoice />
          {isOpen && <span>Financials</span>}
        </li>

        {/* Tasks */}
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <FaTasks />
          {isOpen && <span>Tasks</span>}
        </li>

        {/* Communication */}
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <FaComments />
          {isOpen && <span>Communication</span>}
        </li>

        {/* Analytics (Optional) */}
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <FaChartLine />
          {isOpen && <span>Analytics</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;