import { useState, useEffect } from 'react'
import {
  Reviews,
  ReviewsList,
  Img,
  Name,
  Item,
  Description,
  Article,
} from './MovieReviewsView.styled'
import { fetchMovieReviews } from '../../services/apiService'
import defaultProfile from '../../images/default-profile.png'
import PropTypes from 'prop-types'

export default function MovieReviewsView({ movieId }) {
  const [reviews, setReviews] = useState(null)

  useEffect(() => {
    fetchMovieReviews(movieId).then((reviews) => setReviews(reviews.results))
  }, [movieId])

  return (
    <>
      <Reviews>Reviews</Reviews>
      <ReviewsList>
        {reviews &&
          reviews.map(({ id, content, author_details, author }) => {
            const avatar = author_details.avatar_path

            return (
              <Item key={id}>
                <Article>
                  {avatar ? (
                    <Img
                      src={
                        avatar.includes('/https')
                          ? avatar.slice(1)
                          : `https://image.tmdb.org/t/p/w500/${avatar}`
                      }
                      alt="author"
                    />
                  ) : (
                    <Img src={defaultProfile} alt="author" />
                  )}

                  <Name>{author}</Name>
                </Article>
                <Description>{content}</Description>
              </Item>
            )
          })}
      </ReviewsList>
    </>
  )
}

MovieReviewsView.propTypes = {
  movieId: PropTypes.string.isRequired,
}
