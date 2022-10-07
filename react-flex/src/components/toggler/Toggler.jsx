import React, { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import "./style.css";

export default function Toggler() {
  const THEME = useContext(ThemeContext);
  const [toggleState, setToggleState] = useState(false);

  const toggling = () => {
    setToggleState((preState) => !preState);
    THEME.toogleTheme();
  };

  return (
    <div className="toggler container">
      <span
        className={`material-icons dark-mode mode ${
          toggleState ? "move-y" : ""
        }`}
        onClick={toggling}
      >
        dark_mode
      </span>
      <span
        className={`material-icons light-mode mode ${
          toggleState ? "move-y" : ""
        }`}
        onClick={toggling}
      >
        wb_sunny
      </span>
    </div>
  );
}
