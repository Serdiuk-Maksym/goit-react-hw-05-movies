import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingFilm } from '../../Api/api-services';

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const trendingData = await getTrendingFilm();
        setTrendingMovies(trendingData.results.slice(0, 15));
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
    fetchTrendingMovies();
  }, []);

  if (!trendingMovies || trendingMovies.length === 0) {
    return <>No trending movies available</>;
  }

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
