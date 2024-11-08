import { Link } from "react-router-dom";

import "./Result.css";

function Result({ item }) {
  console.log(item);

  return (
    <div className="details">
      <img src={item.urls.small_s3} alt="item photo" />
      <Link to={`/author/${item.user.username}`}>{item.user.name}</Link>
    </div>
  );
}

export default Result;
