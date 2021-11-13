import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="sectioning">
      <div className="partOfSpeech">{props.meaning.partOfSpeech}</div>
      <div className="definitions">
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index} className="meaning">
              <div className="definition">{definition.definition}</div>
              <div className="example"> {definition.example} </div>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
