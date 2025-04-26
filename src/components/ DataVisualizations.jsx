import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const DataVisualizations = ({ isDarkMode }) => {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [3000, 4000, 3200, 5000, 4500],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const pieData = {
    labels: ["In Stock", "Out of Stock"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md`}>
        <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>Sales Trends</h3>
        <Bar data={barData} />
      </div>
      <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md`}>
        <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>Inventory Status</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default DataVisualizations;