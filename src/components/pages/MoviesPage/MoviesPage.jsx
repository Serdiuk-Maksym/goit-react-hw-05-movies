import { useState } from 'react';
import Header from 'components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const MoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const apiKey = '90bd882d2df921dcde8d1dfedfe3f564';
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data.results.slice(0, 14));
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <Header />
      <div className="form-floating mb-3">
        <input
          type="text"
          value={searchTerm}
          className="form-control"
          id="searchInput"
          placeholder=""
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <label for="searchInput">Search Movie</label>
        <button onClick={handleSearch}>Search</button>
        <ul className="list-group">
          {searchResults.map(
            (movie, index) =>
              index < 14 && (
                <li key={movie.id} className="list-group-item">
                  {movie.title}
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default MoviesPage;
