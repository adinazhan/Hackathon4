import { useState, useEffect } from "react";

import key from "../keys";

import "./SearchBar.css";

function SearchBar({ setResults }) {
  const [search, setSearch] = useState("");

  const loadingData = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?per_page=12&query="${search}"&client_id=${key}`
    );
    const data = await response.json();
    console.log(data);

    setResults(data);
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
    <h1>Search for images</h1>
      <input type="text" onChange={handleInput} />
      <button onClick={loadingData}>Search</button>
    </>
  );
}

export default SearchBar;
