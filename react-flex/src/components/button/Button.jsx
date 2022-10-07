import React from "react";
import "./style.css";

export default function Button(props) {
  const { onClick, value, child } = props;

  const Child = child;

  const rippleEffect = (e) => {
    const button = e.target;
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripple = document.createElement("span");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = "ripple";
    button.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 500);
  };

  return (
    <div
      id="button"
      onClick={(e) => {
        rippleEffect(e);
        onClick();
      }}
    >
      {child && <Child />}
      {value ? value : ""}
    </div>
  );
}
