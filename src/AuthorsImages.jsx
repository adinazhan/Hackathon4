import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import key from "../keys";

import "./AuthorsImages.css";

function AuthorsImages() {
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [imgAuthor, setImgAuthor] = useState("");

  const { id } = useParams();

  const paginate = () => {
    setPage(page + 1);
  };

  const prevPaginate = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const loadData = async () => {
    const response = await fetch(
      `https://api.unsplash.com/users/${id}/photos?per_page=5&client_id=${key}&page=${page}`
    );
    const data = await response.json();
    console.log(data);
    setImages(data);
    setImgAuthor(data.user?.username);
  };

  useEffect(() => {
    loadData();
  }, [page]);

  return (
    <>
      Portfolio:
      <div className="author__images">
        {images &&
          images.map((result, index) => {
            return (
              <div key={index}>
                <img src={result.urls.small} alt="img" />
              </div>
            );
          })}
      </div>
      <button onClick={prevPaginate}>Previous</button>
      <button onClick={paginate}>Next</button>
    </>
  );
}

export default AuthorsImages;
