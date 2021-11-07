import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="definition">
      <div className="partOfSpeech">{props.meaning.partOfSpeech}</div>
      <div className="definitions">
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>
              <div className="example"> {definition.example} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
