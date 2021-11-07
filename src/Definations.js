import React from "react";
import Meaning from "./Meaning";
export default function Definations(props) {
  console.log(props.data.meanings);

  return (
    <div className="Definations">
      <div className="word">{props.data.word}</div>
      {props.data.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
}
