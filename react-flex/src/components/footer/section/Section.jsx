import React from "react";
import Column from "./coloum/Column";
import "./style.css";

export default function Section(props) {
  const heading = "About";
  const items = [
    "Our vision",
    "Legacy academy",
    "The company",
    "The people",
    "Diversity",
  ];

  return (
    <div id="section">
      <Column heading={heading} items={items} />
      <Column heading={heading} items={items} />
      <Column heading={heading} items={items} />
      <Column heading={heading} items={items} />
      <Column heading={heading} items={items} />
      <Column heading={heading} items={items} />
      <Column heading={heading} items={items} />
      <Column heading={heading} items={items} />
    </div>
  );
}
