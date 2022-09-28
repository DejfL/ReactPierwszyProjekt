import React from "react";
import "./Word.css";

const Word = (props) => (
  <li>
    Słowo po angielsku: <strong>{props.english}</strong> Tlumaczenie{" "}
    {props.polish}
  </li>
);

export default Word;
