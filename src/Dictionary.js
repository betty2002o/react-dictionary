import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function fetchData(response) {
    console.log(response.data[0]);
  }

  function onSubmit(event) {
    event.preventDefault();
    const API = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(API).then(fetchData);
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
          placeholder="Search For A Word..."
          onChange={handleChangeKeyword}
        ></input>
        <input type="submit" className="submit-button"></input>
      </form>
    </div>
  );
}
