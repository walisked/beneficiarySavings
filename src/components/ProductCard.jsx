import React from "react";

const ProductCard = () => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <img
        src="https://via.placeholder.com/150"
        alt="Product"
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="mt-2 text-lg font-bold">Product Name</h3>
      <p className="text-gray-600">$100</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
        Contact Distributor
      </button>
    </div>
  );
};

export default ProductCard;
