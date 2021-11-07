import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function onSubmit(event) {
    event.preventDefault();
    alert(keyword);
  }

  function handleChangeKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={onSubmit}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Enter A Word..."
          onChange={handleChangeKeyword}
        ></input>
        <input type="submit" className="submit-button"></input>
      </form>
    </div>
  );
}
