import React from "react";
import SideBar from "./SideBar";
import "./Dashboard.css";
import DashboardTop from "./DashboardTop";
import OrderDetails from "./OrderDetails";

import PieChart from "./PieChart";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="blue-part"></div>
      <div className="left-side">
        <SideBar />
      </div>
      <div className="right-side">
        <div className="right-top">
          <DashboardTop />
        </div>

        <div className="right-bottom">
          <div className="right-BottomLeft">
            <OrderDetails />
          </div>
          <div className="right-BottomRight">
            {/* Pie Chart */}
            <PieChart />
            {/* Pie Chart */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
