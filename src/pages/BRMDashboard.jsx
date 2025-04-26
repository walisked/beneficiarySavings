import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import DashboardKPI from "../components/KPI";
import BarChart from "../components/BarChart";
import KanbanBoard from "../components/KanbanBoard";

const BRMDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`flex ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <Sidebar isDarkMode={isDarkMode} />
      <div className="flex-1">
        <TopBar isDarkMode={isDarkMode} />
        <DashboardKPI />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <BarChart isDarkMode={isDarkMode} />
          <KanbanBoard isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default BRMDashboard;