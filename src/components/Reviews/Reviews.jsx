import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from '../../fetchApi/fetchApi';
import Loader from '../Loader/Loader';

function Reviews() {
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const { moviesId } = useParams();

  useEffect(() => {
    setLoading(true);

    fetchMovieReviews(moviesId)
      .then(data => {
        const { data: { results } } = data;

        setReviewsInfo(results);

        if (results.length === 0) {
          return (`There is no information about the reviews...`);
        };
      })
      .catch(error => {
        console.log('Whoops, something went wrong...', error);
        return (`There is no information about the reviews...`);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000)
      });
  }, [moviesId]);

  return (
    <>
      {loading && <Loader />}
      {reviewsInfo && (
        <ul>
          {reviewsInfo && reviewsInfo.length !== 0 ? (
          reviewsInfo.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
        </ul>
      )}
    </>
  )
}

export default Reviews;