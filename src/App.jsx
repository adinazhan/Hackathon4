import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./Homepage";
import AuthorsInfo from "./AuthorsInfo";
import ResultList from "./ResultList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/results" element={<ResultList />} />
          <Route path="/author/:id" element={<AuthorsInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
