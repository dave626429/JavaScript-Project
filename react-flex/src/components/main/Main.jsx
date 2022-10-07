import React from "react";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import "./style.css";

export default function Main() {
  return (
    <div id="main">
      <Section1 />
      <Section2 />
    </div>
  );
}
