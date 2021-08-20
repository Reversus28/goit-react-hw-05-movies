import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from './Navigation.styled'

export default function Navigation() {
  return (
    <Nav>
      <NavLink className="link" activeClassName="selected" to="/" exact>
        Home
      </NavLink>
      <NavLink className="link" activeClassName="selected" to="/movies">
        Movie
      </NavLink>
    </Nav>
  )
}
