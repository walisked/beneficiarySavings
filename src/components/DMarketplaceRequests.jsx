import { useState } from "react";
import { FaCheck, FaTimes, FaSyncAlt, FaComments, FaTruck } from "react-icons/fa";

const DMarketplaceRequests = () => {
  const [orders, setOrders] = useState([
    { id: 101, product: "Laptop", buyer: "John Doe", status: "Pending", price: "$5,000", fulfillmentPartner: "" },
    { id: 102, product: "Smartphone", buyer: "Jane Smith", status: "Processing", price: "$2,500", fulfillmentPartner: "DHL" },
    { id: 103, product: "Headphones", buyer: "Michael Lee", status: "Shipped", price: "$1,200", fulfillmentPartner: "FedEx" },
  ]);

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Marketplace Orders & Fulfillment</h2>

      {/* Orders Table */}
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Order ID</th>
            <th className="p-3 border">Product</th>
            <th className="p-3 border">Buyer</th>
            <th className="p-3 border">Price</th>
            <th className="p-3 border">Fulfillment Partner</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border">
              <td className="p-3 border text-center">{order.id}</td>
              <td className="p-3 border">{order.product}</td>
              <td className="p-3 border">{order.buyer}</td>
              <td className="p-3 border text-green-600">{order.price}</td>
              <td className="p-3 border text-center">{order.fulfillmentPartner || "Not Assigned"}</td>
              <td className={`p-3 border text-center font-semibold ${order.status === "Shipped" ? "text-blue-500" : order.status === "Processing" ? "text-orange-500" : "text-gray-500"}`}>
                {order.status}
              </td>
              <td className="p-3 border flex space-x-2 justify-center">
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 flex items-center" onClick={() => updateOrderStatus(order.id, "Processing")}>
                  <FaCheck className="mr-1" /> Accept
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center" onClick={() => updateOrderStatus(order.id, "Rejected")}>
                  <FaTimes className="mr-1" /> Reject
                </button>
                <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 flex items-center">
                  <FaComments className="mr-1" /> Negotiate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DMarketplaceRequests;
