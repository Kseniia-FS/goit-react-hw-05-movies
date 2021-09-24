import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";

import { toast } from "react-toastify";

import MovieList from "../../components/MovieList/MovieList";
import { searchMovies } from "../../services/API";
const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.search !== "") {
      let prevQuery = new URLSearchParams(location.search).get("query");
      getMovies(prevQuery);
    }
    setMovies([]);
  }, [location.search]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(query);
    history.push({
      search: `query=${query}`,
      state: { from: location.pathname },
    });
  };

  const getMovies = (query) => {
    searchMovies(query)
      .then((data) => {
        if (data.results.length === 0) {
          toast.error("🦄 Write correct querry!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        }
        setMovies(data.results);
      })
      .catch((error) => console.log(error));
    setQuery("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} value={query} />
        <button type="submit">Search</button>
      </form>

      {movies && <MovieList movies={movies} />}
    </>
  );
};
export default MoviesPage;
