import React from "react";
import NavigationLink from "./navigationLink/navigationLink";
import "./style.css";

export default function NavigationBar() {
  return (
    <div id="navBar">
      <NavigationLink value="Home" />
      <NavigationLink value="About" />
      <NavigationLink value="Career" />
      <NavigationLink value="Contact" />
      <NavigationLink value="Services" />
    </div>
  );
}
