import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import faker from "@faker-js/faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

export const ChartDashboard: React.FC<{}> = () => {
  const labels = ['Jan 04', 'Jan 08', 'Jan 12', 'Jan 16', 'Jan 20', 'Jan 24', 'Jan 28'];
  const [data, setData] = useState({
    labels: labels,
    datasets: [{
      label: 'Expenses by Month',
      lineTension: 0.5,
      data: [1000, 1500, 3200, 4200, 6000,4800,5200],
      backgroundColor: [
        'rgb(255, 192, 48)'
      ],
      borderColor: [
        'rgb(255, 192, 48)'
      ],
      borderWidth: 2
    }]
  });

  return (

  <div className="bg-black shadow p-3 mb-3 rounded">
    <div className="d-flex w-100">
      <div className="text-white me-auto">
        <span className="fs-7">Portfolio Balance</span>
        <h2 className="text-white fw-bolder">$3,372.10 <span className="variacion fs-5 text-success fw-bolder">+12.1%</span></h2>
      </div> 
      <div className="justify-content-end bg-gray py-1 rounded fw-semibold align-self-start fs-7"><a href="" className="px-3 py-1 text-white-50 text-decoration-none">Day</a><a href="" className="px-3 text-white-50 text-decoration-none py-1">Week</a><a href="" className="px-3 text-dark bg-yellow rounded text-decoration-none py-1">Month</a><a href="" className="px-3 text-white-50 text-decoration-none py-1">Year</a><a href="" className="px-3 text-white-50 text-decoration-none py-1">All</a></div>
    </div>

    <div className="chart-area w-100 h-100">
    <Line options={options} data={data} />
    </div>

  </div>

  );
};

export default ChartDashboard;