const KPIWidget = ({ title, value, icon, color }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md flex items-center space-x-4 ${color}`}>
      <div className="text-white text-3xl">{icon}</div>
      <div>
        <h3 className="text-white text-sm">{title}</h3>
        <p className="text-white text-lg font-bold">{value}</p>
      </div>
    </div>
  );
};

const DashboardKPI = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      <KPIWidget title="Revenue" value="$12,345" icon="💰" color="bg-blue-500" />
      <KPIWidget title="Customers" value="1,234" icon="👥" color="bg-green-500" />
      <KPIWidget title="Tasks" value="89" icon="📌" color="bg-yellow-500" />
      <KPIWidget title="Messages" value="45" icon="✉️" color="bg-red-500" />
    </div>
  );
};

export default DashboardKPI;