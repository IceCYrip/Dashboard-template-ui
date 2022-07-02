import React from "react";
import "./OrderCard.css";

function OrderCard({ orderid, name, icon, color }) {
  return (
    <div className="order" style={{ borderColor: `${color}` }}>
      <div className="top">
        <h5>{name}</h5>
        <h6>{orderid}</h6>
      </div>
      <div className="bottom">{icon}</div>
    </div>
  );
}

export default OrderCard;
