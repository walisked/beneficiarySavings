import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Card from '../components/ui/Card'; // Update the path if necessary
import Button from '../components/ui/Button'; // Update the path if necessary
import Progress from '../components/ui/Progress'; // Update the path if necessary
import { BadgeCheck, Clock, XCircle } from 'lucide-react'; // Import relevant icons

const PODashboard = () => {
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({ status: "", vendor: "" });

  useEffect(() => {
    // Fetch orders from API or use mock data
    setOrders([
      { id: 1, vendor: "Vendor A", warehouse: "WH1", status: "Open", amount: 5000, dueDate: "2025-03-01" },
      { id: 2, vendor: "Vendor B", warehouse: "WH2", status: "Pending", amount: 3200, dueDate: "2025-03-10" },
      { id: 3, vendor: "Vendor C", warehouse: "WH1", status: "Delayed", amount: 1500, dueDate: "2025-02-20" },
    ]);
  }, []);

  const filteredOrders = orders.filter(order => {
    return (
      (filters.vendor ? order.vendor.includes(filters.vendor) : true) &&
      (filters.status ? order.status === filters.status : true)
    );
  });

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center">📦 Purchase Orders Dashboard</h1>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 shadow-lg flex flex-col items-center bg-gray-800">
          <BadgeCheck className="text-green-400" size={32} />
          <p className="text-lg font-semibold mt-2 text-white">Total POs</p>
          <h2 className="text-2xl font-bold text-white">{orders.length}</h2>
        </Card>
        <Card className="p-6 shadow-lg flex flex-col items-center bg-gray-800">
          <Clock className="text-yellow-400" size={32} />
          <p className="text-lg font-semibold mt-2 text-white">Pending Shipments</p>
          <h2 className="text-2xl font-bold text-white">{orders.filter(order => order.status === "Pending").length}</h2>
        </Card>
        <Card className="p-6 shadow-lg flex flex-col items-center bg-gray-800">
          <XCircle className="text-red-400" size={32} />
          <p className="text-lg font-semibold mt-2 text-white">Delayed Orders</p>
          <h2 className="text-2xl font-bold text-white">{orders.filter(order => order.status === "Delayed").length}</h2>
        </Card>
      </div>
      
      {/* Filters & Search */}
      <div className="mt-6 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="🔍 Search by Vendor"
          className="p-3 w-full md:w-1/3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setFilters({ ...filters, vendor: e.target.value })}
        />
        <select
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          className="p-3 w-full md:w-1/3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">📋 All Status</option>
          <option value="Open">✅ Open</option>
          <option value="Pending">⏳ Pending</option>
          <option value="Delayed">❌ Delayed</option>
        </select>
        <Button className="bg-blue-500 hover:bg-blue-600 transition duration-300 p-3">Apply Filters</Button>
      </div>

      {/* Order Table */}
      <div className="mt-8 overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-gray-800 text-gray-300">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-4 text-left text-lg">PO Number</th>
              <th className="p-4 text-left text-lg">Vendor</th>
              <th className="p-4 text-left text-lg">Warehouse</th>
              <th className="p-4 text-left text-lg">Status</th>
              <th className="p-4 text-left text-lg">Due Date</th>
              <th className="p-4 text-left text-lg">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b border-gray-700 hover:bg-gray-700 transition duration-200">
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.vendor}</td>
                <td className="p-4">{order.warehouse}</td>
                <td className={`p-4 ${order.status === "Delayed" ? "text-red-400" : "text-green-400"}`}>{order.status}</td>
                <td className="p-4">{order.dueDate}</td>
                <td className="p-4">${order.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Progress Bar */}
      <div className="mt-8 p-4 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Order Fulfillment Progress</h2>
        <Progress value={orders.length * 10} className="mt-3" />
      </div>
    </div>
  );
};
export default PODashboard;