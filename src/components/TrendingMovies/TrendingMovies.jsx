import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const apiKey = '90bd882d2df921dcde8d1dfedfe3f564';
    const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Отримання списку трендових фільмів
        setTrendingMovies(data.results.slice(0, 15));
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div className="list-group">
      <h1>Trending Movies</h1>
      <ul className="list-group">
        {trendingMovies.map(
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
    </div>
  );
};

export default TrendingMovies;
