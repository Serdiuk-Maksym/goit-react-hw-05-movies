import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=90bd882d2df921dcde8d1dfedfe3f564`
        );
        const castData = response.data.cast;
        setCast(castData);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      <ul>
        {cast.map(elem => (
          <li key={elem.id}>
            <img
              src={
                elem.profile_path
                  ? 'https://image.tmdb.org/t/p/w400' + elem.profile_path
                  : 'https://gdr.one/simg'
              }
              alt={elem.name}
            />
            <h3>{elem?.name}</h3>
            <p>Character:</p>
            <p>{elem?.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
