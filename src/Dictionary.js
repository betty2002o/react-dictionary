import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Definations from "./Definations";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function fetchData(response) {
    setResults(response.data[0]);
    console.log(response.data[0]);
    setLoaded(true);
  }

  function onSubmit(event) {
    event.preventDefault();
    const API = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(API).then(fetchData);
  }

  function handleChangeKeyword(event) {
    setKeyword(event.target.value);
  }

  let form = (
    <form onSubmit={onSubmit}>
      <input
        type="search"
        autoFocus={true}
        placeholder="Search For A Word..."
        onChange={handleChangeKeyword}
      ></input>
      <input type="submit" className="submit-button"></input>
    </form>
  );

  if (loaded) {
    return (
      <div className="Dictionary">
        {form}
        <Definations data={results} />
      </div>
    );
  } else {
    return <div className="Dictionary">{form}</div>;
  }
}
