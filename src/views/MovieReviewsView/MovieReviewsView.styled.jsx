import styled from '@emotion/styled'

const Reviews = styled.h2`
  margin-bottom: 50px;
`

const ReviewsList = styled.ul``

const Item = styled.li`
  padding-bottom: 20px;
  border-bottom: 2px solid #171717c1;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`
const Article = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 30px;
`

const Img = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  margin-right: 20px;
`

const Name = styled.h3`
  font-size: 26px;
`
const Description = styled.p`
  font-size: 16px;
`

export { Reviews, ReviewsList, Img, Name, Item, Description, Article }
