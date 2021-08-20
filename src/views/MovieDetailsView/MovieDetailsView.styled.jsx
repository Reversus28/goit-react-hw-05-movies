import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 2px solid #171717c1;
`
const SectionTitle = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`
const Img = styled.img`
  height: 500px;
  margin-right: 50px;
  object-fit: cover;
  border-radius: 5px;
`
const MovieName = styled.h2`
  text-align: center;
  margin-bottom: 70px;
  text-align: center;
  font-size: 30px;
  line-height: 1.16;
  text-transform: uppercase;
  color: #171717;
`

const Details = styled.div``
const DetailsList = styled.ul``
const DetailsItem = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`
const Paragraph = styled.p`
  min-width: 230px;
  &:first-of-type {
    font-weight: 700;
  }
`

const Accent = styled.span`
  display: inline-block;
  width: 40px;

  border-radius: 5px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  line-height: 16px;

  color: #ffffff;
  background-color: tomato;
`
const DescTitle = styled.h2`
  margin-top: 40px;
  margin-bottom: 20px;
`
const Overview = styled.p`
  margin-bottom: 40px;
  line-height: 1.4;
`
const ButtonWrapper = styled.div`
  & > .link {
    display: inline-block;
    min-width: 200px;
    padding: 20px;

    text-align: center;
    font-size: 22px;
    font-weight: 500;

    border-radius: 7px;
    color: white;
    text-decoration: none;
    background-color: tomato;
  }
  & > .link:hover {
    background-color: #2c2c2c;
  }
  & > .link:not(:last-of-type) {
    margin-right: 20px;
  }
`

export {
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
}
