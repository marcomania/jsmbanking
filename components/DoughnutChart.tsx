"use client"

import { Doughnut } from "react-chartjs-2"
import 'chart.js/auto';


const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250,2500, 3200],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
      }
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"]
  }
  return (
    <Doughnut 
      data={data} 
      options={{ cutout:"80%", plugins: { legend: {display: false}}}}
    />
  )
}

export default DoughnutChart