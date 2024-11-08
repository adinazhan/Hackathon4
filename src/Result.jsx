import { useState } from "react";

function Result({ item }) {
  return (
    <div className="details">
      <h3>Author name: {item.user.name}</h3>
      <img src={item.urls.small_s3} alt="item photo" />
    </div>
  );
}

export default Result;
