import {
  NavLink,
  useParams,
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Img from "../../../images/img.svg";
import s from "./MovieDetailsPage.module.css";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import { getOneMovieInfo } from "../../../services/API";
const URL = "https://image.tmdb.org/t/p/w500";
const MovieDetailsPage = () => {
  const location = useLocation();
  const history = useHistory();
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  const { url } = useRouteMatch();

  useEffect(() => {
    getOneMovieInfo(id)
      .then(setMovie)
      .catch((error) => console.log(error));
  }, [id]);

  const handleBtnClick = () => {
    location.state
      ? history.push(
          location.search
            ? location.state.from + location.search
            : location.state.from
        )
      : history.goBack();
  };

  return (
    <div>
      <button type="button" onClick={handleBtnClick}>
        Go back
      </button>

      <div className={s.wrap}>
        <img
          src={movie.poster_path !== null ? `${URL}${movie.poster_path}` : Img}
          alt={movie.title}
        />
        <div>
          <h1>{movie.title}</h1>
          <p className={s.title}>
            User Score: <span>{movie.vote_average}</span>
          </p>
          <p className={s.title}>
            Overview: <span>{movie.overview}</span>
          </p>
          <p className={s.title}>
            Genres:
            {movie.genres &&
              movie.genres.map((el) => {
                return <span key={el.id}> {el.name} </span>;
              })}
          </p>
        </div>
      </div>
      <div>
        <h2>Additional Information</h2>

        <NavLink
          className={s.NavLink}
          to={{
            ...location,
            pathname: `${url}/cast`,
          }}
        >
          Cast
        </NavLink>
        <Route path="/movies/:id/cast">
          <Cast />
        </Route>

        <NavLink
          className={s.NavLink}
          to={{
            ...location,
            pathname: `${url}/reviews`,
          }}
        >
          Reviews
        </NavLink>
        <Route path="/movies/:id/reviews">
          <Reviews />
        </Route>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
