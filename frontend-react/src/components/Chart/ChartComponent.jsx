import React, { useState } from 'react';
import { Bar, Line, Pie, Doughnut, Radar, PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from 'chart.js';

// Đăng ký các phần cần thiết
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale
);

const ChartComponent = () => {
  const [chartType, setChartType] = useState('bar');

  const labels = ['Tháng 1', 'Tháng 2', 'Tháng 3'];
  const datasets = [
    {
      label: 'Doanh thu',
      data: [300, 500, 700],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderWidth: 1,
    },
  ];

  const data = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <Bar data={data} options={options} />;
      case 'line':
        return <Line data={data} options={options} />;
      case 'pie':
        return <Pie data={data} options={options} />;
      case 'doughnut':
        return <Doughnut data={data} options={options} />;
      case 'radar':
        return <Radar data={data} options={options} />;
      case 'polar':
        return <PolarArea data={data} options={options} />;
      default:
        return <p>Không hỗ trợ loại biểu đồ: {chartType}</p>;
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Biểu đồ linh hoạt</h2>
      <select
        value={chartType}
        onChange={(e) => setChartType(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px' }}
      >
        <option value="bar">Bar</option>
        <option value="line">Line</option>
        <option value="pie">Pie</option>
        <option value="doughnut">Doughnut</option>
        <option value="radar">Radar</option>
        <option value="polar">Polar Area</option>
      </select>

      {renderChart()}
    </div>
  );
};

export default ChartComponent;
