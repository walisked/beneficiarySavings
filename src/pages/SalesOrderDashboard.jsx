import { useState } from "react";
import { FaFileCsv, FaFileExcel, FaFilePdf, FaSyncAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SalesOrdersDashboard = () => {
  const [orders, setOrders] = useState([
    { id: "SO1234", dueDate: "2025-02-10", customer: "ABC Corp", product: "Laptop", qty: 10, amount: 5000, status: "Delayed" },
    { id: "SO1235", dueDate: "2025-02-12", customer: "XYZ Ltd", product: "Monitor", qty: 5, amount: 1500, status: "Future" },
    { id: "SO1236", dueDate: "2025-02-08", customer: "Tech Innovators", product: "Keyboard", qty: 20, amount: 800, status: "Tomorrow" },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
        <h1 className="text-xl font-semibold">Sales Orders Management</h1>
        <div className="flex space-x-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"><FaSyncAlt /> Refresh</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2"><FaFileCsv /> CSV</button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center gap-2"><FaFileExcel /> Excel</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2"><FaFilePdf /> PDF</button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="mt-6 bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Order No</th>
              <th className="p-3 text-left">Due Date</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Qty</th>
              <th className="p-3 text-left">Amount ($)</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.dueDate}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.product}</td>
                <td className="p-3">{order.qty}</td>
                <td className="p-3">${order.amount}</td>
                <td className={`p-3 font-semibold ${order.status === "Delayed" ? "text-red-500" : order.status === "Future" ? "text-blue-500" : "text-yellow-500"}`}>{order.status}</td>
                <td className="p-3"><Link to={`/orders/${order.id}`} className="text-blue-500">View</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesOrdersDashboard;
