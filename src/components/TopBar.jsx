const TopBar = ({ isDarkMode }) => {
    return (
      <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-md flex justify-between items-center`}>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className={`p-2 rounded-md ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`}
          />
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            🔔
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="rounded-full"
          />
          <span className={`${isDarkMode ? "text-white" : "text-black"}`}>John Doe</span>
        </div>
      </div>
    );
  };
  
  export default TopBar;