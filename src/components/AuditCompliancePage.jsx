import { useState } from "react";
import { FaExclamationTriangle, FaCheckCircle, FaClipboardList } from "react-icons/fa";

const AuditCompliancePage = () => {
  const [activeTab, setActiveTab] = useState("logs");

  // Sample Data
  const logs = [
    { id: 1, action: "User Login", status: "Success", time: "2025-02-25 10:12 AM" },
    { id: 2, action: "Transaction Approved", status: "Success", time: "2025-02-25 09:45 AM" },
    { id: 3, action: "User Password Change", status: "Success", time: "2025-02-24 06:30 PM" },
    { id: 4, action: "Unauthorized Access Attempt", status: "Failed", time: "2025-02-24 04:15 PM" },
  ];

  const flaggedTransactions = [
    { id: 101, user: "John Doe", amount: "$10,000", reason: "High transaction value", flaggedOn: "2025-02-25" },
    { id: 102, user: "Jane Smith", amount: "$8,500", reason: "Multiple rapid transactions", flaggedOn: "2025-02-24" },
  ];

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Page Title */}
      <h2 className="text-2xl font-semibold mb-4">Audit & Compliance</h2>

      {/* Tabs */}
      <div className="flex space-x-4 border-b pb-2">
        {["logs", "flagged", "tools"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-t-md ${
              activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "logs" && "Activity Logs"}
            {tab === "flagged" && "Flagged Transactions"}
            {tab === "tools" && "Compliance Tools"}
          </button>
        ))}
      </div>

      {/* Activity Logs */}
      {activeTab === "logs" && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Transaction & Activity Logs</h3>
          <ul className="list-none space-y-3">
            {logs.map((log) => (
              <li key={log.id} className="p-3 bg-gray-100 rounded-lg flex justify-between">
                <span>{log.action}</span>
                <span className={log.status === "Success" ? "text-green-600" : "text-red-600"}>
                  {log.status === "Success" ? <FaCheckCircle /> : <FaExclamationTriangle />}
                </span>
                <span className="text-gray-500">{log.time}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Flagged Transactions */}
      {activeTab === "flagged" && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Flagged Transactions 🚩</h3>
          <table className="w-full bg-gray-100 rounded-lg overflow-hidden">
            <thead className="bg-gray-300 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">User</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Reason</th>
                <th className="px-4 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {flaggedTransactions.map((txn) => (
                <tr key={txn.id} className="border-t">
                  <td className="px-4 py-2">{txn.user}</td>
                  <td className="px-4 py-2 text-red-600">{txn.amount}</td>
                  <td className="px-4 py-2">{txn.reason}</td>
                  <td className="px-4 py-2">{txn.flaggedOn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Compliance Enforcement Tools */}
      {activeTab === "tools" && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Compliance Enforcement Tools 🛠️</h3>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-700">
              Use the following tools to ensure compliance and monitor suspicious activities:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center">
                <FaClipboardList className="text-blue-500 mr-2" />
                Transaction Monitoring Dashboard
              </li>
              <li className="flex items-center">
                <FaExclamationTriangle className="text-red-500 mr-2" />
                Fraud Detection System
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Compliance Audit Reports
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditCompliancePage;
