import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import key from "../keys";

function AuthorsImages() {
  const [images, setImages] = useState(null);
  const [imgAuthor, setImgAuthor] = useState("");
  const { id } = useParams();

  const loadData = async () => {
    const response = await fetch(
      `https://api.unsplash.com/users/${id}/photos?per_page=100&client_id=${key}`
    );
    const data = await response.json();
    console.log(data);
    setImages(data);
    setImgAuthor(data.user.username);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      Images:{" "}
      {images &&
        images.map((result, index) => {
          return (
            <div key={index}>
              <img src={result.urls.small} alt="img" />
            </div>
          );
        })}
    </div>
  );
}

export default AuthorsImages;
