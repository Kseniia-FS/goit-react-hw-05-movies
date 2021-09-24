import {
  NavLink,
  useParams,
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import Loader from "react-js-loader";
import s from "./MovieDetailsPage.module.css";
// import Cast from "../../Cast/Cast";
// import Reviews from "../../Reviews/Reviews";
import Movie from "../../components/Movie/Movie";
import { getOneMovieInfo } from "../../services/API";
const Cast = lazy(() => import("../../components/Cast/Cast"));
const Reviews = lazy(() => import("../../components/Reviews/Reviews"));

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
      : history.push("/");
  };

  return (
    <div>
      <button type="button" onClick={handleBtnClick}>
        Go back
      </button>

      <Movie className={s.wrap} movie={movie} />

      <div>
        <h2>Additional Information</h2>

        <NavLink
          className={s.NavLink}
          to={{
            state: {
              from: location.state.from,
            },
            pathname: `${url}/cast`,
          }}
        >
          Cast
        </NavLink>

        <NavLink
          className={s.NavLink}
          to={{
            state: {
              from: location.state.from,
            },
            pathname: `${url}/reviews`,
          }}
        >
          Reviews
        </NavLink>
        <Suspense
          fallback={
            <Loader
              type="bubble-top"
              bgColor={"rgb(89, 121, 151)"}
              title={"bubble-top"}
              size={100}
            />
          }
        >
          <Route path="/movies/:id/cast">
            <Cast />
          </Route>
          <Route path="/movies/:id/reviews">
            <Reviews />
          </Route>
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
