const MarketplaceSection = ({ isDarkMode }) => {
  const requests = [
    { id: 1, product: "Product A", status: "Pending" },
    { id: 2, product: "Product B", status: "Fulfilled" },
    { id: 3, product: "Product C", status: "Pending" },
  ];

  return (
    <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
        Marketplace Requests
      </h3>
      <table className="w-full">
        <thead>
          <tr className={`${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}>
            <th className="p-2 text-left">Product</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id} className={`${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}>
              <td className="p-2">{request.product}</td>
              <td className="p-2">{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketplaceSection;