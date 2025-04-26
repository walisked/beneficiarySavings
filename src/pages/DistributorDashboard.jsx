import { useState } from "react";
import Sidebar from "../components/DSisebar";
import TopBar from "../components/TopBar";
import QuickStats from "../components/QuickStats";
import RecentRequestsTable from "../components/RMRT";
import ProductManagementPanel from "../components/ProductManagementPanel";
import DataVisualizations from "../components/ DataVisualizations";

const DistributorDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    
// ✅ Distributor Dashboard – Manage marketplace listings & sales performance.
// ✅ Product Management – List, edit, and update inventory.
// ✅ Marketplace Requests – View user purchase requests & process orders.
// ✅ Order Fulfillment – Track, update, and complete deliveries.
// ✅ Financial Overview – Monitor revenue, invoices & pending payments.
// ✅ Stock & Inventory – Get alerts on low-stock items.
// ✅ Messages & Notifications – Communicate with buyers & admins.
   
   <div className={`flex ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <Sidebar isDarkMode={isDarkMode} />
      <div className="flex-1">
        <TopBar isDarkMode={isDarkMode} />
        <QuickStats isDarkMode={isDarkMode} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <RecentRequestsTable isDarkMode={isDarkMode} />
          <ProductManagementPanel isDarkMode={isDarkMode} />
        </div>
        <DataVisualizations isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default DistributorDashboard;