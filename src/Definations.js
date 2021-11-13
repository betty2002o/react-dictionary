import React from "react";
import Meaning from "./Meaning";
import "./Definations.css";
export default function Definations(props) {
  return (
    <div className="Definations">
      <div className="sectioning">
        <div className="word">{props.data.word}</div>
        <div className="phonetics">
          <span className="text">/{props.data.phonetics[0].text}/</span>
          <a
            href={props.data.phonetics[0].audio}
            className="audio"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-volume-up speaker"></i>
          </a>
        </div>
      </div>
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
