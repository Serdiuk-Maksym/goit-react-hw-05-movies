import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmById } from '../../Api/api-services';
import BackLink from 'components/BackLink/BackLink';
import MovieDetail from 'components/MovieDetail/MovieDetail';
import AdditionalInformation from 'components/AdditionalInformation/AdditionalInformation';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await getFilmById(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movie) {
    return (
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <BackLink />
      <MovieDetail movie={movie} />
      <AdditionalInformation />
    </div>
  );
};

export default MovieDetailsPage;
