import React from 'react'
import { ContainerNavLink, StyledLink } from '../../styles/header'

const NavLink = () => {
  const auth = false

  return (
    <ContainerNavLink>
      <StyledLink to='/champions'>Champions</StyledLink>
      <StyledLink to='/items'>Items</StyledLink>

      {!auth && <StyledLink to='/'>Login</StyledLink>}

      {auth && <StyledLink to='/builds'>Builds</StyledLink>}
      {auth && <StyledLink to='/logout'>Logout</StyledLink>}
    </ContainerNavLink>
  )
}

export default NavLink
