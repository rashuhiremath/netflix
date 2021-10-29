import { useState, useEffect } from "react";

const MovieDetails = ({ match }) => {
  const [movieItem, setMovieItem] = useState(null);

  useEffect(() => {
    let urlId = match.params.id;
    fetchMovie(urlId);
  }, []);

  const fetchMovie = async (urlId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/media=${urlId}`
      );
      const imageData = await response.json();
      if (response.ok) {
        console.log("my single movie details", imageData);
        setMovieItem(imageData);
      } else {
        console.log(`something went wrong`);
      }
    } catch (e) {
      console.error(`ooops an error occured while fetching`, e);
    }
  };

  return (
    <div className="text-white">
      {
      movieItem && <div>{<img src={movieItem.Poster} />}</div>
      }
    </div>
  );
};
export default MovieDetails;
