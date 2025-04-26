import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBox,
  FaCheckCircle,
  FaClipboardList,
  FaStore,
  FaChartBar,
  FaShieldAlt,
  FaUserCheck,
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
        <li>
          <Link to="/admin-dashboard" className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
            <FaTachometerAlt />
            {isOpen && <span>Dashboard</span>}
          </Link>
        </li>
        <li>
          <Link to="/products" className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
            <FaBox />
            {isOpen && <span>Products</span>}
          </Link>
        </li>
        <li>
          <Link to="/approval-page" className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
            <FaCheckCircle />
            {isOpen && <span>Approvals</span>}
          </Link>
        </li>
        <li>
          <Link to="/orders" className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
            <FaClipboardList />
            {isOpen && <span>Orders</span>}
          </Link>
        </li>
        <li>
          <Link to="/amarketplace" className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
            <FaStore />
            {isOpen && <span>Marketplace</span>}
          </Link>
        </li>
        <li>
          <Link to="/reports" className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
            <FaChartBar />
            {isOpen && <span>Reports</span>}
          </Link>
        </li>
        <li>
          <Link to="/audits" className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
            <FaShieldAlt />
            {isOpen && <span>Audits</span>}
          </Link>
        </li>
        <li>
          <Link to="/onboarding" className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
            <FaUserCheck />
            {isOpen && <span>Onboarding</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
