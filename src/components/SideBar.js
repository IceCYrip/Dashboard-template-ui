import React from "react";
import "./SideBar.css";
import "./SidebarCard.css";

import SidebarCard from "./SidebarCard";
import "antd/dist/antd.min.css";
import {
  ShopOutlined,
  OrderedListOutlined,
  ShoppingCartOutlined,
  TagOutlined,
  WalletOutlined,
  UserOutlined,
  BarChartOutlined,
  PoweroffOutlined,
  SettingOutlined,
  ToolOutlined,
} from "@ant-design/icons";

function SideBar() {
  return (
    <div className="sideBar">
      <SidebarCard
        icon={
          <ShopOutlined
            className="ico"
            style={{ color: "#0083ff", marginRight: "2vw" }}
          />
        }
        text="Dashboard"
      />

      <SidebarCard
        icon={
          <TagOutlined
            className="ico"
            style={{ color: "#FF3737", marginRight: "2vw" }}
          />
        }
        text="Pos"
      />
      <SidebarCard
        icon={
          <ShoppingCartOutlined
            className="ico"
            style={{ color: "#2CDDCB", marginRight: "2vw" }}
          />
        }
        text="Orders"
      />
      <SidebarCard
        icon={
          <OrderedListOutlined
            className="ico"
            style={{ color: "#FF9945", marginRight: "2vw" }}
          />
        }
        text="Order Status Screen"
      />
      <SidebarCard
        icon={
          <WalletOutlined
            className="ico"
            style={{ color: "#FF4261", marginRight: "2vw" }}
          />
        }
        text="Expense"
      />
      <SidebarCard
        icon={
          <UserOutlined
            className="ico"
            style={{ color: "#FF0083", marginRight: "2vw" }}
          />
        }
        text="Customers"
      />
      <SidebarCard
        icon={
          <ToolOutlined
            className="ico"
            style={{ color: "#0057FF", marginRight: "2vw" }}
          />
        }
        text="Services"
      />
      <SidebarCard
        icon={
          <BarChartOutlined
            className="ico"
            style={{ color: "#FFD300", marginRight: "2vw" }}
          />
        }
        text="Reports"
      />
      <SidebarCard
        icon={
          <SettingOutlined
            className="ico"
            style={{ color: "#FFC317", marginRight: "2vw" }}
          />
        }
        text="Tools"
      />
      <SidebarCard
        icon={
          <PoweroffOutlined
            className="ico"
            style={{ color: "#8C8C8C", marginRight: "2vw" }}
          />
        }
        text="Logout"
      />
    </div>
  );
}

export default SideBar;
