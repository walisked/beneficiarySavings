import { useState } from "react";
import { FaCheck, FaTimes, FaEdit, FaStar, FaSearch } from "react-icons/fa";

const AdminProductPage = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Sample Data (Replace with API Data)
  const products = [
    {
      id: 1,
      name: "Smartphone X12",
      distributor: "Tech Distributors Ltd",
      category: "Electronics",
      subcategory: "Mobile Phones",
      price: 150000,
      sales: 120,
      status: "Pending",
      date: "2024-02-06 10:00 AM",
      featured: false,
    },
    {
      id: 2,
      name: "Wireless Headphones",
      distributor: "SoundTech Global",
      category: "Electronics",
      subcategory: "Accessories",
      price: 50000,
      sales: 300,
      status: "Approved",
      date: "2024-02-05 2:30 PM",
      featured: true,
    },
  ];

  // Filtering Products
  const filteredProducts = products.filter((product) => {
    return (
      (filter === "all" || product.status.toLowerCase() === filter) &&
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.distributor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin Product Marketplace</h2>

      {/* Filters & Search */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by Product, Distributor, or Category..."
          className="p-2 border rounded w-64"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Products</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="featured">Featured</option>
        </select>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow-md border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold">{product.name} - ₦{product.price}</h3>
            <p className="text-gray-600">
              <strong>Distributor:</strong> {product.distributor}
            </p>
            <p className="text-gray-600">
              <strong>Category:</strong> {product.category} - <strong>Subcategory:</strong> {product.subcategory}
            </p>
            <p className="text-gray-600"><strong>Sales:</strong> {product.sales}</p>
            <p className="text-gray-500"><strong>Date:</strong> {product.date}</p>

            {/* Action Buttons */}
            <div className="mt-4 flex gap-3">
              {product.status === "Pending" && (
                <>
                  <button className="px-4 py-2 bg-green-600 text-white rounded flex items-center">
                    <FaCheck className="mr-2" /> Approve
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded flex items-center">
                    <FaTimes className="mr-2" /> Reject
                  </button>
                </>
              )}
              <button className="px-4 py-2 bg-blue-600 text-white rounded flex items-center">
                <FaEdit className="mr-2" /> Edit
              </button>
              {product.featured ? (
                <span className="text-yellow-500 flex items-center font-semibold">
                  <FaStar className="mr-2" /> Featured
                </span>
              ) : (
                <button className="px-4 py-2 bg-yellow-500 text-white rounded flex items-center">
                  <FaStar className="mr-2" /> Feature
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProductPage;
