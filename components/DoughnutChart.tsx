"use client";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(Tooltip, ArcElement, Legend);

export default function DoughnutChart({ acccounts }: DoughnutChartProps) {
  const data = {
    datasets: [
      {
        label: "banks",
        data: [39089, 98198, 59870],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: ["bank 1", "bank 2", "bank 3"],
  };
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}
