"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashCharts = () => {
  // Sample data for the last 6 months
  const months = ['January', 'February', 'March', 'April', 'May', 'June'];
  
  const lineChartData: ChartData<'line'> = {
    labels: months,
    datasets: [
      {
        label: 'Registered Startups',
        data: [3, 4, 6, 7, 8, 10],
        borderColor: 'rgb(37, 99, 235)',
        backgroundColor: 'rgba(37, 99, 235, 0.5)',
        tension: 0.3,
      },
      {
        label: 'Proposals',
        data: [2, 3, 4, 5, 6, 8],
        borderColor: 'rgb(22, 163, 74)',
        backgroundColor: 'rgba(22, 163, 74, 0.5)',
        tension: 0.3,
      },
      {
        label: 'Available Mentors',
        data: [3, 5, 6, 6, 6, 6],
        borderColor: 'rgb(147, 51, 234)',
        backgroundColor: 'rgba(147, 51, 234, 0.5)',
        tension: 0.3,
      },
    ],
  };
  const barChartData: ChartData<'bar'> = {
    labels: months,
    datasets: [
      {
        label: 'Available Funds (in millions $)',
        data: [9, 8.5, 8, 7.5, 7, 6.75],
        backgroundColor: 'rgba(249, 115, 22, 0.5)', 
        borderColor: 'rgb(249, 115, 22)',
        borderWidth: 1,
      },
      {
        label: 'Invested Funds (in millions $)',
        data: [.5, 1, 1.5, 2, 2.5, 2.75],
        backgroundColor: 'rgba(220, 38, 38, 0.5)',
        borderColor: 'rgb(220, 38, 38)', 
        borderWidth: 1,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Growth Metrics</h3>
        <Line data={lineChartData} options={options} />
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Investment Overview</h3>
        <Bar data={barChartData} options={options} />
      </div>
    </div>
  );
};

export default DashCharts;
