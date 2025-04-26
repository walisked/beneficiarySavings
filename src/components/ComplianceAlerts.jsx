const ComplianceAlerts = ({ isDarkMode }) => {
    const alerts = [
      { id: 1, message: "Compliance check due for Q1 2024", status: "Pending" },
      { id: 2, message: "Audit report submitted", status: "Completed" },
    ];
  
    return (
      <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md`}>
        <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>Compliance Alerts</h3>
        <ul>
          {alerts.map((alert) => (
            <li key={alert.id} className={`p-2 ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}>
              <span>{alert.message}</span>
              <span className={`ml-2 text-sm ${alert.status === "Pending" ? "text-red-500" : "text-green-500"}`}>
                {alert.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ComplianceAlerts;