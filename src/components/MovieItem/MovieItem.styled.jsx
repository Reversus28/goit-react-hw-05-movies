import styled from '@emotion/styled'

const Item = styled.li``

const Img = styled.img`
  height: 320px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  outline: none;
  object-fit: cover;

  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 2px 1px -1px rgb(0 0 0 / 12%);

  transition: all 250ms linear;

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.05) translateY(-5px);
    -webkit-box-shadow: 0px 5px 14px 2px rgba(0, 0, 0, 0.55);
    -moz-box-shadow: 0px 5px 14px 2px rgba(0, 0, 0, 0.55);
    box-shadow: 0px 5px 14px 2px rgba(0, 0, 0, 0.55);
  }
`

const MovieTitle = styled.h2`
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;

  color: #000000;
`
const Description = styled.div`
  display: flex;
`

const Genre = styled.p`
  display: inline-block;
  margin-right: 10px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: tomato;
`
const Rating = styled.p`
  min-width: 36px;
  height: 16px;
  border-radius: 5px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  line-height: 16px;

  color: #ffffff;
  background-color: tomato;
`

export { Item, Img, MovieTitle, Description, Genre, Rating }
