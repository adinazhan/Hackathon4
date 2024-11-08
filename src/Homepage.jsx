import { useState } from "react";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";

function Homepage() {
  const [results, setResults] = useState(null);

  return (
    <>
      <SearchBar setResults={setResults} />
      <ResultList results={results} />
    </>
  );
}

export default Homepage;
