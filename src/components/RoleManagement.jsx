const RoleManagement = ({ isDarkMode }) => {
  return (
    <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>Role Management</h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Role Name"
          className={`w-full p-2 rounded-md ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`}
        />
        <button className="w-full p-2 bg-blue-500 text-white rounded-md">Add Role</button>
      </div>
    </div>
  );
};

export default RoleManagement;