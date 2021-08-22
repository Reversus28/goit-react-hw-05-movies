import { useState, useEffect } from 'react'
import {
  Route,
  useRouteMatch,
  NavLink,
  useHistory,
  useParams,
  useLocation,
} from 'react-router-dom'
import {
  Wrapper,
  Details,
  SectionTitle,
  Img,
  MovieName,
  DetailsList,
  DetailsItem,
  Paragraph,
  DescTitle,
  Accent,
  Overview,
  ButtonWrapper,
} from './MovieDetailsView.styled'
import { fetchMovieById } from '../../services/apiService'
import defaultImage from '../../images/no-poster.jpg'
import MovieCastView from '../MovieCastView'
import MovieReviewsView from '../MovieReviewsView'

export default function MovieDetailsView() {
  const params = useParams()

  const match = useRouteMatch()
  console.log('match', match)
  const history = useHistory()
  console.log('history', history)
  const location = useLocation()
  console.log('location', location)

  const { url } = match
  const { movieId } = params

  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie)
  }, [movieId])

  const srollDown = () => {
    setTimeout(() => {
      window.scroll({
        top: 340,
        behavior: 'smooth',
      })
    }, 200)
  }

  const goBack = () => {
    history.push(location?.state?.from ?? '/')
  }

  return (
    <>
      {movie && (
        <>
          <SectionTitle>Found movie</SectionTitle>
          <button
            className={'link'}
            activeClassName="selected"
            onClick={goBack}
          >
            Go back
          </button>
          <Wrapper>
            <Img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImage
              }
              alt={movie.title}
            />
            <Details>
              <MovieName>
                {movie.title} ({movie.release_date.substring(0, 4)})
              </MovieName>
              <DetailsList>
                <DetailsItem>
                  <Paragraph>Vote:</Paragraph>
                  <Paragraph>
                    <Accent>{movie.vote_average}</Accent>
                  </Paragraph>
                </DetailsItem>
                <DetailsItem>
                  <Paragraph>Original Title:</Paragraph>
                  <Paragraph>{movie.original_title}</Paragraph>
                </DetailsItem>
                <DetailsItem>
                  <Paragraph>Genres:</Paragraph>
                  <Paragraph>
                    {movie.genres.map((genre) => genre.name).join(', ')}
                  </Paragraph>
                </DetailsItem>
              </DetailsList>
              <DescTitle>About</DescTitle>
              <Overview>{movie.overview}</Overview>
              <ButtonWrapper>
                <NavLink
                  to={`${url}/cast`}
                  className={'link'}
                  activeClassName="selected"
                  onClick={srollDown}
                >
                  Cast
                </NavLink>
                <NavLink
                  to={`${url}/reviews`}
                  className={'link'}
                  activeClassName="selected"
                  onClick={srollDown}
                >
                  Reviews
                </NavLink>
              </ButtonWrapper>
            </Details>
          </Wrapper>

          <Route path={`${url}/cast`}>
            <MovieCastView movieId={movieId} />
          </Route>
          <Route path={`${url}/reviews`}>
            {' '}
            <MovieReviewsView movieId={movieId} />
          </Route>
        </>
      )}
    </>
  )
}
