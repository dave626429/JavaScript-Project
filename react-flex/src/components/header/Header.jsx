import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import Button from "../button/Button";
import NavigationBar from "../navigationBar/NavigationBar";
import Toggler from "../toggler/Toggler";
import Logo from "./logo/Logo";
import "./style.css";

function Child() {
  const THEME = useContext(ThemeContext);
  return (
    <span className="material-icons">
      {THEME.theme === "dark" ? "dark_mode" : "wb_sunny"}
    </span>
  );
}

export default function Header() {
  const THEME = useContext(ThemeContext);
  return (
    <div id="header">
      <Logo />
      <NavigationBar />
      {/* <Button onClick={THEME.toogleTheme} child={Child} /> */}
      <Toggler />
    </div>
  );
}
