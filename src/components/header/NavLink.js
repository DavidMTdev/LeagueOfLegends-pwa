import { useDispatch, useSelector } from 'react-redux'
import actions from '../../actions'
import { ContainerNavLink, StyledLink } from '../../styles/header'

const NavLink = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.login.data)

  const Logout = () => {
    dispatch(actions.login.logout())
  }

  return (
    <ContainerNavLink>
      <StyledLink to='/champions'>Champions</StyledLink>
      <StyledLink to='/items'>Items</StyledLink>

      {!auth && <StyledLink to='/'>Login</StyledLink>}

      {auth && <StyledLink to='/builds'>Builds</StyledLink>}
      {auth && <StyledLink onclick={Logout()}>Logout</StyledLink>}
    </ContainerNavLink>
  )
}

export default NavLink
