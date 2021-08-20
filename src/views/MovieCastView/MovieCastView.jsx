import { useState, useEffect } from 'react'
import { Actors, CastList, Img, Name } from './MovieCastView.styled'
import { fetchMovieCast } from '../../services/apiService'
import defaultImage from '../../images/no-poster.jpg'
import PropTypes from 'prop-types'

export default function MovieCastView({ movieId }) {
  const [cast, setCast] = useState(null)

  useEffect(() => {
    fetchMovieCast(movieId).then((credits) => setCast(credits.cast))
  }, [movieId])

  return (
    <>
      <Actors>Actors</Actors>
      <CastList>
        {cast &&
          cast.map(({ id, name, profile_path }) => {
            return (
              <li key={id}>
                <Img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                      : defaultImage
                  }
                  alt={name}
                />
                <Name>{name}</Name>
              </li>
            )
          })}
      </CastList>
    </>
  )
}
MovieCastView.propTypes = {
  movieId: PropTypes.string.isRequired,
}
