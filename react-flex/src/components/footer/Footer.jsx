import React from "react";
import Logo from "../header/logo/Logo";
import Section from "./section/Section";
import "./style.css";

export default function Footer() {
  return (
    <div id="footer">
      <div id="footer-logo">
        <Logo />
      </div>
      <div id="footer-section">
        <Section />
        {/* <Section /> */}
      </div>
    </div>
  );
}
