import { useState } from "react";
import SearchBar from "./SearchBar";

function Result({ item }) {
  console.log(item);

  return (
    <>
      <h3>Author name: {item.user.name}</h3>
      <h3>Total likes: {item.likes}</h3>
      <img src={item.urls.small_s3} alt="item photo" />
    </>
  );
}

export default Result;
