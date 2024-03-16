import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const movieGenreBaseUrl = "https://api.themoviedb.org/3/discover/movie";
const apiKey = "82528a30826dfef9a6114957446a4315";

// https://api.themoviedb.org/3/discover/movie?api_key=82528a30826dfef9a6114957446a4315&with_genres=28

const getTrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${apiKey}`);
const getMoviesByGenreId = (id) => axios.get(`${movieGenreBaseUrl}?api_key=${apiKey}&with_genres=${id}`)
export default { getTrendingVideos , getMoviesByGenreId};
