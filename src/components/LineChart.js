import React from "react";
import { Bar, Line, PolarArea, Radar } from "react-chartjs-2";

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

function LineChart() {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  //   const data = {
  //     labels: labels,
  //     datasets: [
  //       {
  //         label: "My First Dataset",
  //         data: [65, 59, 80, 81, 56, 55, 40, 70, 34, 32, 88],
  //         fill: false,
  //         borderColor: "rgb(75, 192, 192)",
  //         tension: 0.1,
  //       },
  //     ],
  //   };
  //   const data = {
  //     labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
  //     datasets: [
  //       {
  //         label: "My First Dataset",
  //         data: [11, 16, 7, 3, 14],
  //         backgroundColor: [
  //           "rgb(255, 99, 132)",
  //           "rgb(75, 192, 192)",
  //           "rgb(255, 205, 86)",
  //           "rgb(201, 203, 207)",
  //           "rgb(54, 162, 235)",
  //         ],
  //       },
  //     ],
  //   };
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Cases",
        data: [
          65553, 53342, 94344, 83534, 56344, 53434, 44545, 76543, 53434, 53434,
          88888,
        ],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "Deaths",
        data: [
          2823, 4824, 4024, 1924, 9642, 2744, 1044, 2424, 1424, 1424, 8888,
        ],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
      {
        label: "Recovered",
        data: [
          28234, 48243, 4024, 1924, 96424, 27424, 10024, 2424, 1424, 1424, 8888,
        ],
        fill: true,
        backgroundColor: "rgba(162, 54, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };
  return (
    <>
      <Line
        data={data}
        options={{
          maintainAspectRatio: true,
          responsive: true,
          indexAxis: "x",
        }}
        style={{ height: "300px", width: "450px" }}
      />
    </>
  );
}

export default LineChart;
