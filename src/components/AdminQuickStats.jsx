const QuickStats = ({ isDarkMode }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
      {/* Active Products */}
      <div className={`p-6 rounded-lg shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <h3 className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Active Products</h3>
        <p className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>1,234</p>
      </div>

      {/* Pending Approvals */}
      <div className={`p-6 rounded-lg shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <h3 className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Pending Approvals</h3>
        <p className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>23</p>
      </div>

      {/* Sales Performance */}
      <div className={`p-6 rounded-lg shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <h3 className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Sales Performance</h3>
        <p className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>$45,678</p>
      </div>
    </div>
  );
};

export default QuickStats;