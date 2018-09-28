import axios from "axios";

export function getMovieFromID(movieID = 76341) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=04186c04103c5d6019ff0dcae50fec49&language=en`
  );
}

export function getMovieFromName(movieName) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=04186c04103c5d6019ff0dcae50fec49`
  );
}
