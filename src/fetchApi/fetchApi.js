import axios from "axios";

const API_KEY = '330e0c7492d2da195764b5f6a5017e6c';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrendCollection() {
  return await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
};

export async function fetchMovieByKeyWord(value) {
  return await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${value}&include_adult=false`);
};

export async function fetchMovieById(filmId) {
  return await axios.get(`${BASE_URL}/movie/${filmId}?api_key=${API_KEY}`);  
};
export async function fetchMovieCredits(movieId) {
  return await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
};

export async function fetchMovieReviews(movieId) {
  return await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);  
};