const API_KEY = 'e46b87edbe0418b9678f5579382a8e13'
const BASE_URL = 'https://api.themoviedb.org/3'

async function fetchTmdbAPI(url = '') {
  const response = await fetch(url)

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'))
}

export function fetchTrendingMovie(totalPage) {
  return fetchTmdbAPI(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${totalPage}`,
  )
}
export function getGenreList() {
  return fetchTmdbAPI(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
}

export function fetchMovieById(movie_id) {
  return fetchTmdbAPI(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`)
}
export function fetchMovieCast(movie_id) {
  return fetchTmdbAPI(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`,
  )
}
export function fetchMovieReviews(movie_id) {
  return fetchTmdbAPI(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`,
  )
}

export function SearchMovie(query, currentPage) {
  return fetchTmdbAPI(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${currentPage}`,
  )
}
