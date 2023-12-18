import axios from 'axios';

const API_KEY = '90bd882d2df921dcde8d1dfedfe3f564';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingFilm = async () => {
  const resp = await axios.get(`/trending/movie/day?api_key=${API_KEY}&page=1`);
  const data = resp.data;

  return data;
};

export const getFilmById = async movieId => {
  const resp = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  const data = resp.data;

  return data;
};

export const getSearchMovie = async searchQuery => {
  const resp = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${searchQuery}`
  );
  const data = resp.data;

  return data;
};

export const getCastMovie = async movieID => {
  const resp = await axios.get(`/movie/${movieID}/credits?api_key=${API_KEY}`);
  const data = resp.data;
  return data;
};

export const getReviewMovie = async movieID => {
  const resp = await axios.get(`/movie/${movieID}/reviews?api_key=${API_KEY}`);
  const data = resp.data;
  return data;
};
