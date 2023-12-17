import { useState, useEffect } from 'react';
import { fetchMovieCast } from 'Api/fetchMovieCast';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';

const Cast = () => {
  const [movieCast, setMovieCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const castData = await fetchMovieCast(movieId);
        setMovieCast(castData);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [movieId]);

  if (!movieCast || movieCast.length === 0) {
    return <>Sorry, there is no info about film cast</>;
  }

  return (
    <>
      <ul className={styles.CastList}>
        {movieCast?.map(elem => {
          return (
            <li key={elem.id} className={styles.CastItem}>
              <img
                src={
                  elem.profile_path
                    ? 'https://image.tmdb.org/t/p/w400' + elem.profile_path
                    : 'https://gdr.one/simg'
                }
                alt={elem.name}
                className={styles.CastProfile}
              />
              <div>
                <h3 className={styles.Actor}>{elem?.name}</h3>
                <p className={styles.Character}>Character: {elem?.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;