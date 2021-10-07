import { useState, useEffect } from "react";

const MovieDetails = ({ match }) => {
  const [movieItem, setMovieItem] = useState(null);

  useEffect(() => {
    let urlId = match.params.movieId;
    fetchMovie(urlId);
  }, []);

  const fetchMovie = async (urlId) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=1dcfbf0b&i=${urlId}`
      );
      const data = await response.json();
      if (response.ok) {
        console.log(`initial data`, data);
        setMovieItem(data);
      } else {
        console.log(`something went wrong`);
      }
    } catch (e) {
      console.error(`ooops an error occured while fetching`, e);
    }
  };

  return (
    <div className="text-white">
      {movieItem && <div>{<img src={movieItem.Poster} />}</div>}
    </div>
  );
};
export default MovieDetails;
