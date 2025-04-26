import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import {
  FaTachometerAlt,
  FaBox,
  FaClipboardList,
  FaWarehouse,
  FaChartBar,
  FaEnvelope,
  FaStore,
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
          <Link to="/dashboard" className="flex items-center space-x-2">
            <FaTachometerAlt />
            {isOpen && <span>Dashboard</span>}
          </Link>
        </li>
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <Link to="/dproduct-management" className="flex items-center space-x-2">
            <FaBox />
            {isOpen && <span>Products</span>}
          </Link>
        </li>
         <li>
                  <Link to="/dmarketplace-requests" className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
                    <FaStore />
                    {isOpen && <span>Marketplace</span>}
                  </Link>
                </li>
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <Link to="/purchase-orders" className="flex items-center space-x-2">
            <FaClipboardList />
            {isOpen && <span>P O</span>}
          </Link>
        </li>
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <Link to="/sales-orders" className="flex items-center space-x-2">
            <FaWarehouse />
            {isOpen && <span>Sales Order</span>}
          </Link>
        </li>
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <Link to="/reports" className="flex items-center space-x-2">
            <FaChartBar />
            {isOpen && <span>Reports</span>}
          </Link>
        </li>
        <li className="flex items-center space-x-2 p-3 hover:bg-gray-700 cursor-pointer">
          <Link to="/messages" className="flex items-center space-x-2">
            <FaEnvelope />
            {isOpen && <span>Messages</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
