import React from "react";
import "./DashboardCard.css";

function DashboardCard({ label, count, icon }) {
  return (
    <div className="dashCard">
      <div className="left">
        <label>{label}</label>
        <label1>{count}</label1>
      </div>
      <div className="right">{icon}</div>
    </div>
  );
}

export default DashboardCard;
