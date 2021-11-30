import { useState } from 'react'

import NavLink from './NavLink'
import NavTheme from './NavTheme'
import NavTranslate from './NavTranslate'
import NavMenu from './NavMenu'

import IconLogo from '../../assets/icons/league-of-lengeds-icon-default.png'
import {
  ContainerHeader,
  HeaderLogo,
  HollowHeader,
  HeaderNav,
  LogoIcon,
  LogoTitle,
  HeaderMenu,
  BurgerDiv
} from '../../styles/header'

const Header = () => {
  const [showLink, setShowLink] = useState(true)

  return (
    <>
      <HollowHeader />

      <ContainerHeader>
        <HeaderLogo>
          <LogoIcon src={IconLogo} alt='league-of-lengeds-icon-default.png' />
          <LogoTitle>My Legends</LogoTitle>
        </HeaderLogo>

        <HeaderNav>
          { showLink ? <NavLink /> : null }
          <NavTheme />
          <NavTranslate />
          <BurgerDiv onClick={() => setShowLink(!showLink)}>
            <NavMenu />
          </BurgerDiv>
        </HeaderNav>

        {/* <HeaderMenu>
          <NavTheme />
          <NavTranslate />
          <NavMenu />
        </HeaderMenu> */}
      </ContainerHeader>
    </>
  )
}

export default Header
