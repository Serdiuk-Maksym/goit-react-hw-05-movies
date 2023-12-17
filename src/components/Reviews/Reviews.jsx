import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'Api/fetchMovieReviews';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.css';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const reviewsData = await fetchMovieReviews(movieId);
        setMovieReviews(reviewsData);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);

  if (!movieReviews || movieReviews.length === 0) {
    return <>Sorry, there are no reviews for this film</>;
  }

  return (
    <>
      <ul>
        {movieReviews?.map(review => {
          return (
            <li key={review.id} className={styles.Item}>
              <h3 className={styles.Author}>{review?.author}</h3>
              <p className={styles.Comment}>{review?.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
