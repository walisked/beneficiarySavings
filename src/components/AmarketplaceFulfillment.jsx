import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const AMarketplaceFulfillment = () => {
  const [orders, setOrders] = useState([
    {
      id: 101,
      item: "Laptop",
      totalItemsSold: 5,
      transactionValue: "$5,000",
      distributor: "John Doe",
      company: "Tech Solutions Ltd",
      rcNumber: "RC-123456",
      brmName: "Emily Carter",
      partner: "FedEx",
      status: "Pending",
      destination: "New York, NY",
    },
    {
      id: 102,
      item: "Smartphone",
      totalItemsSold: 10,
      transactionValue: "$8,500",
      distributor: "Jane Smith",
      company: "Mobile Express Ltd",
      rcNumber: "RC-789012",
      brmName: "Robert Johnson",
      partner: "DHL",
      status: "In Progress",
      destination: "San Francisco, CA",
    },
    {
      id: 103,
      item: "Headphones",
      totalItemsSold: 20,
      transactionValue: "$2,000",
      distributor: "Michael Lee",
      company: "AudioTech Corp",
      rcNumber: "RC-456789",
      brmName: "Lisa Williams",
      partner: "UPS",
      status: "Completed",
      destination: "Los Angeles, CA",
    },
  ]);

  const markCompleted = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: "Completed" } : order
      )
    );
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Page Title */}
      <h2 className="text-2xl font-semibold mb-4">Marketplace Fulfillment Dashboard</h2>

      {/* Order Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 border">Order ID</th>
              <th className="p-3 border">Item(s)</th>
              <th className="p-3 border">Total Sold</th>
              <th className="p-3 border">Transaction Value</th>
              <th className="p-3 border">Distributor</th>
              <th className="p-3 border">Company Name</th>
              <th className="p-3 border">RC Number</th>
              <th className="p-3 border">BRM Name</th>
              <th className="p-3 border">Fulfillment Partner</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Destination</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border">
                <td className="p-3 border text-center">{order.id}</td>
                <td className="p-3 border">{order.item}</td>
                <td className="p-3 border text-center">{order.totalItemsSold}</td>
                <td className="p-3 border text-green-600">{order.transactionValue}</td>
                <td className="p-3 border">{order.distributor}</td>
                <td className="p-3 border">{order.company}</td>
                <td className="p-3 border">{order.rcNumber}</td>
                <td className="p-3 border">{order.brmName}</td>
                <td className="p-3 border text-center font-medium">{order.partner}</td>
                <td
                  className={`p-3 border font-semibold text-center ${
                    order.status === "Completed"
                      ? "text-green-600"
                      : order.status === "In Progress"
                      ? "text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  {order.status}
                </td>
                <td className="p-3 border">{order.destination}</td>
                <td className="p-3 border text-center">
                  {order.status === "Completed" ? (
                    <span className="text-green-600 flex items-center justify-center">
                      <FaCheckCircle className="mr-1" /> Done
                    </span>
                  ) : (
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 flex items-center"
                      onClick={() => markCompleted(order.id)}
                    >
                      <FaCheckCircle className="mr-1" /> Complete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Admin Insights */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Admin Recommendations</h3>
        <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-2">
          <li>Monitor high-value transactions to prevent fraud.</li>
          <li>Optimize delivery partners based on location efficiency.</li>
          <li>Automate order status updates for real-time tracking.</li>
          <li>Analyze distributor sales performance for better engagement.</li>
        </ul>
      </div>
    </div>
  );
};

export default AMarketplaceFulfillment;
