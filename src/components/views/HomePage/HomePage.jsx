import { useState, useEffect } from "react";
import MovieList from "../../MovieList/MovieList";

import { getTrendingMovies } from "../../../services/API";
const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length !== 0) {
      return;
    }

    getTrendingMovies()
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  }, [movies]);

  return (
    <section>
      <MovieList movies={movies} />
    </section>
  );
};

export default HomePage;
