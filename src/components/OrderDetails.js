import { ShopOutlined } from "@ant-design/icons";
import { Select, Input } from "antd";
import React from "react";
import OrderCard from "./OrderCard";
import "./OrderDetails.css";

function OrderDetails() {
  return (
    <div className="order-details">
      <div className="header">
        <div className="left">
          <h3>Today's Delivery</h3>
        </div>

        <div className="right">
          <Input placeholder="Search here" />
          <Select placeholder="All orders" />
        </div>
      </div>

      <div className="orders">
        <OrderCard
          name="Karan" // Hard coded value as of now, later replaced with the response fetched from backend
          orderid="ORD-898" // Hard coded value as of now, later replaced with the response fetched from backend
          icon={<ShopOutlined className="ico" />} // Hard coded value as of now, later replaced with the response fetched from backend
          color="green"
        />
        <OrderCard
          name="Karan" // Hard coded value as of now, later replaced with the response fetched from backend
          orderid="ORD-898" // Hard coded value as of now, later replaced with the response fetched from backend
          icon={<ShopOutlined className="ico" />} // Hard coded value as of now, later replaced with the response fetched from backend
          color="#ffa339"
        />
        <OrderCard
          name="Karan" // Hard coded value as of now, later replaced with the response fetched from backend
          orderid="ORD-898" // Hard coded value as of now, later replaced with the response fetched from backend
          icon={<ShopOutlined className="ico" />} // Hard coded value as of now, later replaced with the response fetched from backend
          color="red"
        />
        <OrderCard
          name="Karan" // Hard coded value as of now, later replaced with the response fetched from backend
          orderid="ORD-898" // Hard coded value as of now, later replaced with the response fetched from backend
          icon={<ShopOutlined className="ico" />} // Hard coded value as of now, later replaced with the response fetched from backend
          color="blue"
        />
        <OrderCard
          name="Karan" // Hard coded value as of now, later replaced with the response fetched from backend
          orderid="ORD-898" // Hard coded value as of now, later replaced with the response fetched from backend
          icon={<ShopOutlined className="ico" />} // Hard coded value as of now, later replaced with the response fetched from backend
          color="rgb(74, 165, 255)"
        />
      </div>
    </div>
  );
}

export default OrderDetails;
