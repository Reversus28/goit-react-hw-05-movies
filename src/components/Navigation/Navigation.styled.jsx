import styled from '@emotion/styled'

const Nav = styled.nav`
  width: 1200px;
  margin: 0 auto;

  & > .link {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 24px;
  }

  & > .link:hover {
    color: tomato;
  }

  & > .link:first-of-type {
    margin-right: 20px;
  }

  & > .selected {
    color: tomato;
  }
`

export { Nav }
