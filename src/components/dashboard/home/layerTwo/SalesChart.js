import React from "react";
import * as S from "./LayerTwoStyled";
import color from "../../../../constants/color";
import { Bar } from "react-chartjs-2";

const SalesChart = (data) => {
  const chartData = {
    labels: [data.day01, data.day02, data.day03, data.day04, data.day05, data.day06, data.day07],
    datasets: [
      {
        label: "Sales Amount",
        data: [
          data.salesAmount01,
          data.salesAmount02,
          data.salesAmount03,
          data.salesAmount04,
          data.salesAmount05,
          data.salesAmount06,
          data.salesAmount07,
        ],
        backgroundColor: color.greenShade1,
      },
      {
        label: "Sales Quantity",
        data: [
          data.salesQuantity01,
          data.salesQuantity02,
          data.salesQuantity03,
          data.salesQuantity04,
          data.salesQuantity05,
          data.salesQuantity06,
          data.salesQuantity07,
        ],
        backgroundColor: color.greyShade4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          callback: function (val, index) {
            return index % 2 === 0 ? this.getLabelForValue(val) : "";
          },
          font: {
            size: 12,
            weight: "700",
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "center",

        labels: {
          boxWidth: 7,
          boxHeight: 7,
          font: {
            size: 12,
            weight: "700",
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <S.ChartWrapper>
      <Bar data={chartData} options={options} />
    </S.ChartWrapper>
  );
};

export default SalesChart;
