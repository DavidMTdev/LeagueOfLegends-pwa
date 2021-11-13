import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = () => {
  return (
    <nav>
      <Link to='/champions'>Champions</Link>
      <Link to='/items'>Items</Link>
      <Link to='/'>Login</Link>
      <Link to='/builds'>Builds</Link>
      <Link to='/logout'>Logout</Link>
    </nav>
  )
}

export default NavLink
