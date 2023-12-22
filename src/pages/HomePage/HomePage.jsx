import { useState, useEffect } from 'react';
import { getTrendingFilm } from '../../Api/api-services';
import MoviesList from 'components/MovieList/MovieList';

const HomePage = () => {
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
    <>
      <h2>Trending Movies</h2>
      <MoviesList searchResults={trendingMovies} />
    </>
  );
};

export default HomePage;
