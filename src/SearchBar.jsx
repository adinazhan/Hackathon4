import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import key from "../keys";

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
  useEffect(() => {
    loadingData();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleInput} />
      <button onClick={loadingData}>Search</button>
      {/* <Link to="/results" onClick={loadingData}>
        See results
      </Link> */}
    </>
  );
}

export default SearchBar;
