import Img from "../../images/img.svg";
import { Link, useLocation } from "react-router-dom";
import { getOneMovieInfo } from "../../services/API";
import s from "../../views/MoviesPage/MoviesPage.module.css";
const URL = "https://image.tmdb.org/t/p/w500";
const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map(({ id, poster_path, title }) => {
        return (
          <li key={id} className={s.item}>
            <Link
              to={{
                state: { from: location.pathname + location.search },
                pathname: `/movies/${id}`,
              }}
              onClick={() => getOneMovieInfo(id)}
            >
              <img
                src={poster_path !== null ? `${URL}${poster_path}` : Img}
                alt={title}
              />
            </Link>
            <p>{title}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
