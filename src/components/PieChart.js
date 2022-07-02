import React from "react";
// import { Doughnut } from "react-chartjs-2";
import "./PieChart.css";

function PieChart({ data }) {
  return (
    <div className="pieChart">
      <h4>Hello from pie chart div</h4>

      <div className="pie"></div>
      <div className="pieStats"></div>
    </div>
  );
}

export default PieChart;
