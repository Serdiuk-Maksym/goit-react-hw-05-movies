import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useState({ query: '' });

  const handleSearch = async () => {
    const apiKey = '90bd882d2df921dcde8d1dfedfe3f564';
    const apiUrl = `https://api.themoviedb.org/3/search/movie`;

    const params = new URLSearchParams();
    params.append('api_key', apiKey);
    params.append('query', searchParams.query);

    const urlWithParams = `${apiUrl}?${params.toString()}`;

    try {
      const response = await fetch(urlWithParams);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data.results.slice(0, 14));
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchParams]);

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
