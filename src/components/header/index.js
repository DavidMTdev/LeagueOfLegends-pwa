import NavLink from './NavLink'
import NavTheme from './NavTheme'
import NavTranslate from './NavTranslate'

import IconLogo from '../../assets/icons/league-of-lengeds-icon-default.png'
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
          <NavTranslate />
        </HeaderNav>
      </ContainerHeader>
    </>
  )
}

export default Header
