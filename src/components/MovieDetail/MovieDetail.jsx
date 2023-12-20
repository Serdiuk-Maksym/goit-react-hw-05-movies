import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
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
  );
};

export default MovieDetail;
