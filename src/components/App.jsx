import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import Cast from './Cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      <Route path="/movies/:movieId/cast" element={<Cast />} />
    </Routes>
  );
};
