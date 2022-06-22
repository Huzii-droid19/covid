import React from "react";
import { Line } from "react-chartjs-2";
import { getCovidHistory } from "../api/data.api";

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

const LineChart = () => {
  const [covidHistory, setCovidHistory] = React.useState({
    cases: {},
    deaths: {},
    recovered: {},
  });
  React.useEffect(() => getCovidHistory(setCovidHistory), []);
  const { cases, deaths, recovered } = covidHistory;
  const labels = Object.keys(cases);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Cases",
        data: Object.values(cases),
        // fill: true,
        // backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "Deaths",
        data: Object.values(deaths),
        // fill:true,
        // backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
      {
        label: "Recovered",
        data: Object.values(recovered),
        // backgroundColor: "rgba(162, 54, 235, 0.2)",
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
        style={{ height: "350px", width: "450px" }}
      />
    </>
  );
};

export default LineChart;
