import React from "react";
import "./style.css";

export default function NavigationLink(props) {
  const { value } = props;
  return <a id="nav-link">{value}</a>;
}
