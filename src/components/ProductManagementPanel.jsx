const ProductManagementPanel = ({ isDarkMode }) => {
  return (
    <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
        Product Management
      </h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          className={`w-full p-2 rounded-md ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`}
        />
        <input
          type="number"
          placeholder="Quantity"
          className={`w-full p-2 rounded-md ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`}
        />
        <button className="w-full p-2 bg-blue-500 text-white rounded-md">Add Product</button>
      </div>
    </div>
  );
};

export default ProductManagementPanel;