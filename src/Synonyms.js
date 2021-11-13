import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  return (
    <div>
      <div className="synonyms-title">Synonyms: </div>
      {props.synonyms.map(function (synonym, index) {
        if (index < 7) {
          return (
            <ul className="synonyms">
              <li key={index}>{synonym}</li>
            </ul>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
