import { useParams } from "react-router";
import { useState, useEffect } from "react";

import s from "./Reviews.module.css";
import { getMovieReviews } from "../../../services/API";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieReviews(id).then((data) => setReviews(data.results));
  }, [id]);

  return reviews.length !== 0 ? (
    <ul className={s.list}>
      {reviews.map(({ author, id, content }) => {
        return (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <h3>No reviews till now(((</h3>
  );
};
export default Reviews;
