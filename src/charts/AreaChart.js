// components/AreaChart.js
import React, { useEffect, useRef } from 'react';

const AreaChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new window.Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Digital Goods',
            backgroundColor: 'rgba(60,141,188,0.9)',
            borderColor: 'rgba(60,141,188,0.8)',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: true,
          },
          {
            label: 'Electronics',
            backgroundColor: 'rgba(210, 214, 222, 1)',
            borderColor: 'rgba(210, 214, 222, 1)',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { display: false } },
          y: { grid: { display: false } },
        },
      },
    });
  }, []);

  return <canvas ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default AreaChart;
