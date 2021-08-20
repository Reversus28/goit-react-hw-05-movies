import styled from '@emotion/styled'

const Actors = styled.h2`
  margin-bottom: 50px;
`

const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
`

const Img = styled.img`
  height: 170px;
  margin-bottom: 7px;
`
const Name = styled.h3`
  font-size: 16px;
  font-weight: normal;
  text-align: center;
`

export { Actors, CastList, Img, Name }
