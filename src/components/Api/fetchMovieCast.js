import axios from 'axios';

const API_KEY = '90bd882d2df921dcde8d1dfedfe3f564';

const fetchMovieCast = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
  try {
    const response = await axios.get(URL);
    const data = response.data.cast;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchMovieCast };
