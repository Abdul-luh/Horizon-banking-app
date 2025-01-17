"use client";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(Tooltip, ArcElement, Legend);

export default function DoughnutChart({ acccounts }: DoughnutChartProps) {
  const data = {
    datasets: [
      {
        label: "banks",
        data: [1289, 98198, 598790],
      },
    ],
    labels: ["bank 1", "bank 2", "bank 3"],
  };
  return <Doughnut data={data} />;
}
