import React from "react";
import "./Photos.css";
export default function Photos(props) {
  if (props.data) {
    return (
      <div className="sectioning row">
        {props.data.map(function (photo, index) {
          return (
            <div className="col-4" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  className="img-fluid"
                  alt={props.keyword}
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
