import React from "react";
import "./style.css";

export default function Typography(props) {
  const { value, style } = props;
  return (
    <div id="text" style={style}>
      {value
        ? value
        : `provide the "text inside 'value' property of this component."`}
    </div>
  );
}
