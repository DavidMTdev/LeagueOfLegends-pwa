import NavLink from './NavLink'

import IconLogo from '../../assets/icons/league-of-lengeds-icon-default.png'
import NavTheme from './NavTheme'
import {
  ContainerHeader,
  HeaderLogo,
  HollowHeader,
  HeaderNav,
  LogoIcon,
  LogoTitle
} from '../../styles/header'

const Header = () => {
  return (
    <>
      <HollowHeader />

      <ContainerHeader>
        <HeaderLogo>
          <LogoIcon src={IconLogo} alt='league-of-lengeds-icon-default.png' />
          <LogoTitle>My Legends</LogoTitle>
        </HeaderLogo>

        <HeaderNav>
          <NavLink />
          <NavTheme />
        </HeaderNav>
      </ContainerHeader>
    </>
  )
}

export default Header
