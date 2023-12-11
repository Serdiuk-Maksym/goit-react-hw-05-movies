import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from 'components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams(); // Отримання movieId з параметрів шляху

  useEffect(() => {
    const apiKey = '90bd882d2df921dcde8d1dfedfe3f564';
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Отримання інформації про конкретний фільм
        setMovie(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
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
      <Header />
      <div>
        <img
          alt={movie.poster_path}
          src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`}
        ></img>
        <div>
          <h2>{movie.title}</h2>
          <p>Rating: {movie.vote_average}</p>
          <p>Overview: {movie.overview}</p>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <Link to={Cast}>Cast</Link>
        <Link to={Reviews}>Reviews</Link>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
