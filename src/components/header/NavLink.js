import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

const ContainerNavLink = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 20px;
`

const StyledLink = styled(Link)`
  font-family: 'FrizQuadrata';
  font-weight: bold;
  padding: 0 10px;
  color: ${props => props.theme.secondary};
  background-color: ${props => props.theme.primary};
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => props.theme.primaryHover};
  }
`

export default NavLink
