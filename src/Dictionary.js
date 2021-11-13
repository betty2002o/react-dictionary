import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Definations from "./Definations";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function fetchData(response) {
    setResults(response.data[0]);
    setLoaded(true);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function onSubmit(event) {
    event.preventDefault();
    const API = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(API).then(fetchData);

    let pexelapikey = `563492ad6f9170000100000184229c2d8f904fff87017165f84b46b1`;
    let pexelurl = ` https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelurl, { headers: { Authorization: `Bearer ${pexelapikey}` } })
      .then(handlePexelResponse);
  }

  function handleChangeKeyword(event) {
    setKeyword(event.target.value);
  }

  let form = (
    <div>
      <div className="title"> Dictionary Search Engine</div>
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

  if (loaded) {
    return (
      <div className="Dictionary">
        {form}
        <Definations data={results} />
        <Photos data={photos} keyword={keyword} />
      </div>
    );
  } else {
    return <div className="Dictionary">{form}</div>;
  }
}
