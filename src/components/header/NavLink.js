import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/login'
import { ContainerNavLink, StyledLink } from '../../styles/header'

const NavLink = () => {
  const dispatch =  useDispatch()
  const auth = useSelector(state => state.login.data)

  const Logout = () =>{
    dispatch(logout())
  }



  return (
    <ContainerNavLink>
      <StyledLink to='/champions'>Champions</StyledLink>
      <StyledLink to='/items'>Items</StyledLink>

      {!auth && <StyledLink to='/'>Login</StyledLink>}

      {auth && <StyledLink to='/builds'>Builds</StyledLink>}
      {auth && <StyledLink to='/logout' onclick={Logout()}>Logout</StyledLink>}
    </ContainerNavLink>
  )
}

export default NavLink
