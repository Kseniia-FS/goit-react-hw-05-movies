const API_KEY = "9f1fb482c921b0c5bbdb756b764b64cf";
const BASE_URL = "https://api.themoviedb.org/3/";

export const getTrendingMovies = () => {
  return fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error("OOOps!"));
    }
  );
};

export const getOneMovieInfo = (movieId) => {
  return fetch(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("OOOps!"));
  });
};

export const searchMovies = (searchQuery) => {
  return fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("OOOps!"));
  });
};

export const getMovieCast = (id) => {
  return fetch(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("OOOps!"));
  });
};

export const getMovieReviews = (id) => {
  return fetch(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("OOOps!"));
  });
};
