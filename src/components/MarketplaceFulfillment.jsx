import { useState } from "react";
import { FaTruck, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const MarketplaceFulfillment = () => {
  const [orders, setOrders] = useState([
    { id: 101, item: "Laptop", customer: "John Doe", status: "Pending", partner: "" },
    { id: 102, item: "Smartphone", customer: "Jane Smith", status: "In Progress", partner: "DHL" },
    { id: 103, item: "Headphones", customer: "Michael Lee", status: "Completed", partner: "FedEx" },
  ]);

  const fulfillmentPartners = ["FedEx", "DHL", "UPS", "Amazon Logistics"];

  const assignPartner = (orderId, partner) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, partner, status: "In Progress" } : order
      )
    );
  };

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
      <h2 className="text-2xl font-semibold mb-4">Marketplace Fulfillment</h2>

      {/* Order Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Order ID</th>
            <th className="p-3 border">Item</th>
            <th className="p-3 border">Distributor</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Fulfillment Partner</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border">
              <td className="p-3 border text-center">{order.id}</td>
              <td className="p-3 border">{order.item}</td>
              <td className="p-3 border">{order.customer}</td>
              <td
                className={`p-3 border font-semibold ${
                  order.status === "Completed" ? "text-green-600" :
                  order.status === "In Progress" ? "text-blue-600" : "text-gray-600"
                }`}
              >
                {order.status}
              </td>
              <td className="p-3 border text-center">
                {order.partner ? (
                  <span className="font-medium">{order.partner}</span>
                ) : (
                  <select
                    className="border rounded p-1"
                    onChange={(e) => assignPartner(order.id, e.target.value)}
                  >
                    <option value="">Select Partner</option>
                    {fulfillmentPartners.map((partner, index) => (
                      <option key={index} value={partner}>
                        {partner}
                      </option>
                    ))}
                  </select>
                )}
              </td>
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

      {/* Order Completion Summary */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Order Completion Overview</h3>
        <p className="text-gray-700 mt-2">
          Monitor the fulfillment progress and ensure timely delivery for all marketplace orders.
        </p>
      </div>
    </div>
  );
};

export default MarketplaceFulfillment;
