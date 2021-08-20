import React from 'react'
import {
  Item,
  Img,
  MovieTitle,
  Description,
  Genre,
  Rating,
} from './MovieItem.styled'
import defaultImage from '../../images/no-poster.jpg'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function MovieItem({ id, image, title, date, rating, genre }) {
  return (
    <Item>
      <Link
        to={{
          pathname: `/movies/${id}`,
        }}
      >
        <Img
          src={
            image ? `https://image.tmdb.org/t/p/w300/${image}` : defaultImage
          }
          alt={title}
        />
      </Link>
      <MovieTitle>{title}</MovieTitle>
      <Description>
        <Genre>
          {genre} || {date && date.substring(0, 4)}
        </Genre>
        <Rating>{rating}</Rating>
      </Description>
    </Item>
  )
}
MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}
