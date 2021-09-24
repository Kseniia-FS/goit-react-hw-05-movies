import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Img from "../../images/img.svg";
import s from "./Cast.module.css";
import { getMovieCast } from "../../services/API";
const URL = "https://image.tmdb.org/t/p/w500";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieCast(id).then((data) => setCast(data.cast));
  }, [id]);

  return cast.length !== 0 ? (
    <ul className={s.list}>
      {cast.map(({ name, id, profile_path }) => {
        return (
          <li key={id} className={s.item}>
            <img
              src={profile_path !== null ? `${URL}${profile_path}` : Img}
              alt=""
              className={s.img}
            />
            {name}
          </li>
        );
      })}
    </ul>
  ) : (
    <h3>Nobody knows this movie((</h3>
  );
};
export default Cast;
