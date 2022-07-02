import React from "react";
import "./SidebarCard.css";

function SidebarCard({ icon, text }) {
  return (
    <div className="sbCard">
      {icon}
      <label>
        <nobr>{text}</nobr>
      </label>
    </div>
  );
}

export default SidebarCard;
