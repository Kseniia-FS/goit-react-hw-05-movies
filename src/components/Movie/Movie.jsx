import s from "./Movie.module.css";
import Img from "../../images/img.svg";
const URL = "https://image.tmdb.org/t/p/w500";
const Movie = ({ movie }) => {
  return (
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
  );
};

export default Movie;
