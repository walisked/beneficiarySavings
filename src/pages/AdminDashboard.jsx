import { useState } from "react";
import Sidebar from "../components/ASidebar";
import TopBar from "../components/TopBar";
import QuickStats from "../components/AdminQuickStats";
import PendingApprovalsTable from "../components/pendingApprovalsTable";
import MarketplaceSection from "../components/MarketplaceSelection";
import SalesAnalytics from "../components/SalesAnalytics";
import ComplianceAlerts from "../components/ComplianceAlerts";
import RoleManagement from "../components/RMRT";

const AdminDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
// ✅ Admin Dashboard – High-level view of all system activities.
// ✅ User & BRM Management – Approve BRMs, distributors & monitor users.
// ✅ Audit & Compliance – Track flagged transactions & suspicious activities.
// ✅ Marketplace Oversight – Approve/reject product listings.
// ✅ System Reports & Logs – View transaction logs, user activity, and system stats.
// ✅ Role & Permission Management – Assign roles & set user access levels.
// ✅ Support & Disputes – Resolve disputes between users, distributors, and BRMs.


    <div className={`flex ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <Sidebar isDarkMode={isDarkMode} />
      <div className="flex-1">
        <TopBar isDarkMode={isDarkMode} />
        <QuickStats isDarkMode={isDarkMode} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <PendingApprovalsTable isDarkMode={isDarkMode} />
          <MarketplaceSection isDarkMode={isDarkMode} />
        </div>
        <SalesAnalytics isDarkMode={isDarkMode} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <ComplianceAlerts isDarkMode={isDarkMode} />
          <RoleManagement isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;