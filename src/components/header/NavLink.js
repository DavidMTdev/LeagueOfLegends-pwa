import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { ContainerNavLink, StyledLink } from '../../styles/header'
import Logout from '../login/Logout'

const NavLink = () => {
  const { t, i18n } = useTranslation()
  const auth = useSelector(state => state.login.data)
  // i18n.changeLanguage('en_US')

  return (
    <ContainerNavLink>
      <StyledLink to='/champions'>{t('header.champions')}</StyledLink>
      <StyledLink to='/items'>{t('header.items')}</StyledLink>

      {!auth && <StyledLink to='/'>{t('header.login')}</StyledLink>}

      {auth && <StyledLink to='/builds'>{t('header.builds')}</StyledLink>}
      {auth && <Logout />}
    </ContainerNavLink>
  )
}

export default NavLink
