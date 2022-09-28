import React from "react";

const SwitchButton = (props) => (
  <button onClick={props.onClick}>{props.active ? "Stop" : "Start"}</button>
);

export default SwitchButton;
