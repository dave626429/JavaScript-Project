import React from "react";
import "./style.css";

export default function Column(props) {
  const { items, heading } = props;
  return (
    <div id="col">
      <div id="col-space">
        <div id="col-heading">{heading || "Column"}</div>
        {items?.map((item, index) => (
          <div key={`col-item-${index}`} className="col-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
