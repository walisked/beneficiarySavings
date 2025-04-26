import { useState } from "react";
import { FaDownload, FaFileCsv, FaFilePdf } from "react-icons/fa";

const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState("sales");

  const reports = {
    sales: ["Total Revenue", "Orders", "Conversion Rate"],
    product: ["Top Selling", "Stock Levels", "Returns"],
    user: ["Active Users", "New Signups", "Churn Rate"],
  };

  const exportData = (format) => {
    alert(`Exporting data as ${format.toUpperCase()}...`);
    // Here, you would integrate an actual CSV/PDF export logic
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Page Title */}
      <h2 className="text-2xl font-semibold mb-4">Reports & Insights</h2>

      {/* Tabs */}
      <div className="flex space-x-4 border-b pb-2">
        {["sales", "product", "user"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-t-md ${
              activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Reports
          </button>
        ))}
      </div>

      {/* Reports List */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Reports
        </h3>
        <ul className="list-disc pl-6 text-gray-700">
          {reports[activeTab].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Export Buttons */}
      <div className="flex space-x-3 mt-6">
        <button
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          onClick={() => exportData("csv")}
        >
          <FaFileCsv className="mr-2" /> Export CSV
        </button>
        <button
          className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          onClick={() => exportData("pdf")}
        >
          <FaFilePdf className="mr-2" /> Export PDF
        </button>
      </div>

      {/* Insights Section */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Performance Insights</h3>
        <p className="text-gray-700 mt-2">
          Based on your recent reports, we recommend optimizing product listings and increasing marketing spend to boost sales.
        </p>
      </div>
    </div>
  );
};

export default ReportsPage;
