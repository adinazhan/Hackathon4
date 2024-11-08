import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import key from "../keys";
import AuthorsImages from "./AuthorsImages";

function AuthorsInfo() {
  const [author, setAuthor] = useState(null);

  const { id } = useParams();

  const loadData = async () => {
    const response = await fetch(
      `https://api.unsplash.com/users/${id}?client_id=${key}`
    );
    const data = await response.json();
    console.log(data);
    setAuthor(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="author__detais">
      <Link to={"/"}>Return to homepage</Link>

      <div className="information">
        <h1> Name: {author && author.name} </h1>
        Username: {author && author.username}
        <br />
        {author && author.bio}
        Total likes: {author && author.total_likes} <br />
        Followers count: {author && author.followers_count}
      </div>
      <div className="author__images">
        <AuthorsImages />
      </div>
    </div>
  );
}

export default AuthorsInfo;
