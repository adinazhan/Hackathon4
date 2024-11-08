import { useState, useEffect } from "react";

import key from "../keys";

function SearchBar() {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");

  const loadingData = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query="${search}"&client_id=${key}`
    );
    const data = await response.json();
    console.log(data);

    setData(data);
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
    </>
  );
}

export default SearchBar;
