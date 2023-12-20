import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getSearchMovie } from '../../Api/api-services';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useState({ query: '' });

  const handleSearch = useCallback(async () => {
    const searchQuery = searchParams.query;

    try {
      const searchResults = await getSearchMovie(searchQuery);
      setSearchResults(searchResults.results.slice(0, 14));
    } catch (error) {
      console.error('There was a problem with the search:', error);
    }
  }, [searchParams.query]);

  useEffect(() => {
    const fetchData = async () => {
      await handleSearch();
    };

    fetchData();
  }, [handleSearch]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = value => {
    setSearchParams({ query: value });
    handleSearch();
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSubmit(searchTerm);
    }
  };

  return (
    <div>
      <SearchForm
        handleSubmit={handleSubmit}
        searchTerm={searchTerm}
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
      />
      <MoviesList searchResults={searchResults} />
    </div>
  );
};

export default MoviesPage;
