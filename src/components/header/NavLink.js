import { useSelector } from 'react-redux'
import { ContainerNavLink, StyledLink } from '../../styles/header'
import Logout from '../login/Logout'

const NavLink = () => {
  const auth = useSelector(state => state.login.data)

  return (
    <ContainerNavLink>
      <StyledLink to='/champions'>Champions</StyledLink>
      <StyledLink to='/items'>Items</StyledLink>

      {!auth && <StyledLink to='/'>Login</StyledLink>}

      {auth && <StyledLink to='/builds'>Builds</StyledLink>}
      {auth && <Logout />}
    </ContainerNavLink>
  )
}

export default NavLink
