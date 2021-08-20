import styled from '@emotion/styled'

const Title = styled.h1`
  margin: 0;
  margin-bottom: 40px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  color: #171717;
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`
const Input = styled.input`
  padding: 7px;
  height: 50px;
  width: 300px;
  font-size: 20px;
  border: 2px solid #171717;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
`
const Button = styled.button`
  margin-left: -5px;
  padding: 8px 10px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: tomato;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 150px;

  &:focus,
  &:hover {
    background-color: #171717;
  }
`

export { Title, Input, Form, Button }
