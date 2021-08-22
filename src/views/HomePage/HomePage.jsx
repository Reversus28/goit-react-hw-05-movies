import { useState, useEffect } from 'react'

import { Title } from './HomePage.styled'
import { fetchTrendingMovie, getGenreList } from '../../services/apiService'
import ReactPaginate from 'react-paginate'
import MoviesList from '../../components/MoviesList'
import MovieItem from '../../components/MovieItem'

export default function HomeView() {
  const [movies, setMovies] = useState(null)
  const [pageInfo, setPageInfo] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const [genreList, setGenreList] = useState([])

  useEffect(() => {
    fetchTrendingMovie(currentPage).then((movies) => {
      setMovies(movies.results)
      setPageInfo(movies)
    })

    getGenreList().then((genreList) => setGenreList(genreList.genres))
  }, [currentPage])

  const handlePageClick = (e) => {
    setCurrentPage(e.selected + 1)
  }

  return (
    <>
      <Title>Trending movies</Title>
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
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageInfo.total_pages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        pageLinkClassName={`page`}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        nextClassName={'next'}
        previousClassName={'previous'}
      ></ReactPaginate>
    </>
  )
}
