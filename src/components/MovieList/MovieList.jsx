import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ searchResults }) => {
  return (
    <ul className="list-group">
      {searchResults.map(
        (movie, index) =>
          index < 15 && (
            <li key={movie.id} className="list-group-item">
              <Link
                to={`/movies/${movie.id}`}
                className="list-group-item-action"
              >
                {movie.title}
              </Link>
            </li>
          )
      )}
    </ul>
  );
};

export default MoviesList;
