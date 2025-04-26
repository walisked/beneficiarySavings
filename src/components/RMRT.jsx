const RecentRequestsTable = ({ isDarkMode }) => {
    const requests = [
      { id: 1, product: "Product A", quantity: 10, status: "Pending" },
      { id: 2, product: "Product B", quantity: 5, status: "Pending" },
      { id: 3, product: "Product C", quantity: 20, status: "Pending" },
    ];
  
    return (
      <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md`}>
        <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
          Recent Marketplace Requests
        </h3>
        <table className="w-full">
          <thead>
            <tr className={`${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}>
              <th className="p-2 text-left">Product</th>
              <th className="p-2 text-left">Quantity</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id} className={`${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}>
                <td className="p-2">{request.product}</td>
                <td className="p-2">{request.quantity}</td>
                <td className="p-2">{request.status}</td>
                <td className="p-2">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2">Accept</button>
                  <button className="px-2 py-1 bg-red-500 text-white rounded-md mr-2">Reject</button>
                  <button className="px-2 py-1 bg-yellow-500 text-white rounded-md">Negotiate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default RecentRequestsTable;