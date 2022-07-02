import React from "react";
import "./DashboardTop.css";
import DashboardCard from "./DashboardCard";
import {
  CheckOutlined,
  LikeFilled,
  LoadingOutlined,
  ShoppingFilled,
} from "@ant-design/icons";

function DashboardTop() {
  return (
    <div className="topCard">
      <DashboardCard
        label="Pending Order"
        count="200" // Hard coded value as of now, later replaced with the state fetched from backend
        icon={
          <ShoppingFilled
            style={{
              backgroundColor: "#6F6F6F ",
              paddingLeft: "1vw",
              paddingRight: "1vw",
              paddingTop: "1vw",
              paddingBottom: "1vw",
              borderRadius: "40px",
            }}
          />
        }
      />
      <DashboardCard
        label="Processing Order"
        count="99" // Hard coded value as of now, later replaced with the state fetched from backend
        icon={
          <LoadingOutlined
            style={{
              backgroundColor: "#FFA339",
              paddingLeft: "1vw",
              paddingRight: "1vw",
              paddingTop: "1vw",
              paddingBottom: "1vw",
              borderRadius: "40px",
            }}
          />
        }
      />
      <DashboardCard
        label="Ready to Deliver"
        count="263" // Hard coded value as of now, later replaced with the state fetched from backend
        icon={
          <LikeFilled
            style={{
              backgroundColor: "#21BF85",
              paddingLeft: "1vw",
              paddingRight: "1vw",
              paddingTop: "1vw",
              paddingBottom: "1vw",
              borderRadius: "40px",
            }}
          />
        }
      />
      <DashboardCard
        label="Delivered Order"
        count="345" // Hard coded value as of now, later replaced with the state fetched from backend
        icon={
          <CheckOutlined
            style={{
              backgroundColor: "#0083ff",
              paddingLeft: "1vw",
              paddingRight: "1vw",
              paddingTop: "1vw",
              paddingBottom: "1vw",
              borderRadius: "40px",
            }}
          />
        }
      />
    </div>
  );
}

export default DashboardTop;
