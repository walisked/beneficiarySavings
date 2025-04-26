const PendingApprovalsTable = ({ isDarkMode }) => {
  const approvals = [
    { id: 1, name: "John Doe", role: "BRM", status: "Pending" },
    { id: 2, name: "Jane Smith", role: "BRM", status: "Pending" },
    { id: 3, name: "Aliyu Musa", role: "BRM", status: "Pending" },
  ];

  return (
    <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
        Pending Trasaction Approvals
      </h3>
      <table className="w-full">
        <thead>
          <tr className={`${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Role</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {approvals.map((approval) => (
            <tr key={approval.id} className={`${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}>
              <td className="p-2">{approval.name}</td>
              <td className="p-2">{approval.role}</td>
              <td className="p-2">{approval.status}</td>
              <td className="p-2">
                <button className="px-2 py-1 bg-green-500 text-white rounded-md mr-2">Approve</button>
                <button className="px-2 py-1 bg-red-500 text-white rounded-md">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingApprovalsTable;