import { useState, useEffect } from 'react'

import { Title, Input, Form, Button } from './MovieSearchView.styled'
import { SearchMovie, getGenreList } from '../../services/apiService'
import ReactPaginate from 'react-paginate'
import MoviesList from '../../components/MoviesList'
import MovieItem from '../../components/MovieItem'
import { toast } from 'react-toastify'

export default function MovieSearchView() {
  const [query, setQuery] = useState('')
  const [constantQuery, setConstantQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [genreList, setGenreList] = useState([])
  const [moviesAPI, setMoviesAPI] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getGenreList().then((genreList) => setGenreList(genreList.genres))
  }, [])

  useEffect(() => {
    if (constantQuery === '' ?? constantQuery !== query) {
      return
    }
    SearchMovie(constantQuery.trim(), currentPage).then((movies) => {
      setMovies(movies.results)
      setMoviesAPI(movies)
    })
  }, [constantQuery, currentPage, query])

  const handlePageClick = (e) => {
    setCurrentPage(e.selected + 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query === '') {
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

    SearchMovie(query, currentPage).then((movies) => {
      setMovies(movies.results)
      setMoviesAPI(movies)
      setConstantQuery(query.trim())
    })
  }

  return (
    <>
      <Title>Search movies</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          onChange={(e) => setQuery(e.currentTarget.value.toLowerCase().trim())}
          value={query}
        />
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
