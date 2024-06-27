import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const PolarChart = () => {
  const data = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB']
      }
    ]
  };

  return <PolarArea data={data} />;
};

export default PolarChart;
