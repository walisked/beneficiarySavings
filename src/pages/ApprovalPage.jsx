import { useState } from "react";
import { FaCheck, FaTimes, FaSearch } from "react-icons/fa";

const ApprovalPage = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Sample Data (Replace with API Data)
  const requests = [
    {
      id: 1,
      brmName: "Ahmed Musa",
      taPercentage: 85,
      community: "Kano North",
      groupName: "Tech Innovators",
      userName: "John Doe",
      amount: 50000,
      status: "Pending",
      date: "2024-02-06 12:30 PM",
    },
    {
      id: 2,
      brmName: "Zainab Umar",
      taPercentage: 90,
      community: "Kaduna Central",
      groupName: "Digital Entrepreneurs",
      userName: "Aisha Bello",
      amount: 75000,
      status: "Approved",
      date: "2024-02-06 10:15 AM",
    },
  ];

  // Filtering Requests
  const filteredRequests = requests.filter((req) => {
    return (
      (filter === "all" || req.status.toLowerCase() === filter) &&
      (req.brmName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        req.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        req.community.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin Approval Panel</h2>

      {/* Filters & Search */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by BRM, User, or Community..."
          className="p-2 border rounded w-64"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Requests</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="history">History</option>
        </select>
      </div>

      {/* Request List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredRequests.map((req) => (
          <div key={req.id} className="bg-white p-4 rounded shadow-md border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold">{req.brmName} - {req.taPercentage}% TA</h3>
            <p className="text-gray-600">
              <strong>Community:</strong> {req.community} - <strong>Group:</strong> {req.groupName}
            </p>
            <p className="text-gray-600">
              <strong>User:</strong> {req.userName} - <strong>Amount:</strong> ₦{req.amount}
            </p>
            <p className="text-gray-500"><strong>Date:</strong> {req.date}</p>

            {/* Action Buttons */}
            <div className="mt-4 flex gap-3">
              {req.status === "Pending" && (
                <>
                  <button className="px-4 py-2 bg-green-600 text-white rounded flex items-center">
                    <FaCheck className="mr-2" /> Approve
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded flex items-center">
                    <FaTimes className="mr-2" /> Reject
                  </button>
                </>
              )}
              {req.status === "Approved" && (
                <span className="text-green-600 font-semibold">Approved</span>
              )}
              {req.status === "History" && (
                <span className="text-gray-600">Completed</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovalPage;
