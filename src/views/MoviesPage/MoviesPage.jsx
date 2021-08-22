import { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { Title, Input, Form, Button } from './MoviesPage.styled'
import { SearchMovie, getGenreList } from '../../services/apiService'
import ReactPaginate from 'react-paginate'
import MoviesList from '../../components/MoviesList'
import MovieItem from '../../components/MovieItem'
import { toast } from 'react-toastify'

export default function MovieSearchView() {
  const [movies, setMovies] = useState([])
  const [genreList, setGenreList] = useState([])
  const [moviesAPI, setMoviesAPI] = useState([])

  const history = useHistory()
  const location = useLocation()

  const searchQuery = new URLSearchParams(location.search).get('query')
  const currentPages = Number(new URLSearchParams(location.search).get('page'))

  useEffect(() => {
    getGenreList().then((genreList) => setGenreList(genreList.genres))
  }, [])

  useEffect(() => {
    if (!searchQuery) {
      return
    }
    SearchMovie(searchQuery.trim(), currentPages).then((movies) => {
      setMovies(movies.results)
      setMoviesAPI(movies)
    })
  }, [currentPages, searchQuery])

  const handlePageClick = (e) => {
    history.push({
      ...location,
      search: `query=${searchQuery}&page=${e.selected + 1}`,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const query = e.target.elements.movieInput

    if (query.value === '') {
      toast.warn('🦄 Enter yor query!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return
    }

    history.push({
      ...location,
      search: `query=${query.value}&page=${1}`,
    })

    query.value = ''
  }

  return (
    <>
      <Title>Search movies</Title>

      <Form onSubmit={handleSubmit}>
        <Input id="movieInput" type="text" />
        <Button type="submit">Search</Button>
      </Form>

      <MoviesList>
        {movies &&
          movies.map(
            ({
              id,
              poster_path,
              title,
              release_date,
              vote_average,
              genre_ids,
            }) => {
              const movieGenre = genreList
                .filter((genre) => genre_ids.includes(genre.id))
                .map((genre) => genre.name)
                .join(', ')

              return (
                <MovieItem
                  key={id}
                  id={id}
                  image={poster_path}
                  title={title}
                  date={release_date}
                  rating={vote_average}
                  genre={movieGenre}
                />
              )
            },
          )}
      </MoviesList>
      {movies.length > 0 && (
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={moviesAPI.total_pages}
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          pageLinkClassName={`page`}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          nextClassName={'next'}
          previousClassName={'previous'}
        ></ReactPaginate>
      )}
    </>
  )
}
