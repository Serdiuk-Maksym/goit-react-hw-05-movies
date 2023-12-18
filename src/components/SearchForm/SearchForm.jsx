import React from 'react';

const SearchForm = ({
  handleSubmit,
  searchTerm,
  handleChange,
  handleKeyPress,
}) => {
  const onSubmit = () => {
    handleSubmit(searchTerm);
  };

  return (
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
      <label htmlFor="searchInput">Search Movie</label>
      <button className="btn btn-primary" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
