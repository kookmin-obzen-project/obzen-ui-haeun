import React from 'react';
import ReactApexChart from 'react-apexcharts';

type ChartComponentProps = {
  data: {
    categories: string[];
    series: {
      name: string;
      data: number[];
    }[];
  };
};

const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
  const options = {
    xaxis: {
      categories: data.categories,
    },
    yaxis: {
      title: {
        text: 'Values',
      },
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={data.series}
      type="line" // Change the chart type here if needed (e.g., bar, pie, etc.)
      height={300} // Adjust the chart height as per your requirement
    />
  );
};

export default ChartComponent;
