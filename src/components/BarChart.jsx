import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ isDarkMode }) => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Revenue",
        data: [3000, 4000, 3200, 5000, 4500],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-md rounded-lg`}>
      <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>Revenue Trend</h3>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;