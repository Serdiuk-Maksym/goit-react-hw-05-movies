import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef =
    location?.state?.from?.state?.from || location?.state?.from || '/';

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
      <Link to={backLinkRef}>Go Back</Link>
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
        <ul className="list-group">
          <li className="list-group-item">
            <Link to={`cast`} className="list-group-item-action">
              Cast
            </Link>
          </li>
          <li className="list-group-item">
            <Link to={`reviews`} className="list-group-item-action">
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
