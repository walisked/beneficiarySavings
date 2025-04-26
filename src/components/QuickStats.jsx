const QuickStats = ({ isDarkMode }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
        {/* Total Sales */}
        <div className={`p-6 rounded-lg shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
          <h3 className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Total Sales</h3>
          <p className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>$12,345</p>
        </div>
  
        {/* Pending Orders */}
        <div className={`p-6 rounded-lg shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
          <h3 className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Pending Orders</h3>
          <p className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>23</p>
        </div>
  
        {/* Revenue */}
        <div className={`p-6 rounded-lg shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
          <h3 className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Revenue</h3>
          <p className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>$8,910</p>
        </div>
      </div>
    );
  };
  
  export default QuickStats;