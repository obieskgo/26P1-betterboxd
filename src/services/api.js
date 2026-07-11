const API_KEY="7fd2f3307db95e2e45c35b5fdccbd3ae";
const BASE_URL="https://api.themoviedb.org/3";

export const getPopularMovies= async() => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies= async(query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query
    =${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};