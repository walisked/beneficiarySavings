import { FaWallet, FaTachometerAlt, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Dashboard", icon: <FaTachometerAlt />, path: "/user-dashboard" },
  { label: "Wallet", icon: <FaWallet />, path: "/user-dashboard/wallet" },
  { label: "Settings", icon: <FaCog />, path: "/user-dashboard/settings" }, // Corrected Settings path
  { label: "Logout", icon: <FaSignOutAlt />, path: "/user-dashboard/logout" }, // Corrected Logout path
];

const UserSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white flex flex-col shadow-lg p-4">
      <div>
        <h2 className="text-xl font-bold mb-6">User Panel</h2>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700 transition ${
                  location.pathname === item.path ? "bg-gray-700" : ""
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserSidebar;
