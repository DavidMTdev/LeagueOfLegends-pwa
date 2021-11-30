import { useEffect, useState } from 'react'

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

  const [windowSize, setWindowSize] = useState(undefined);
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize <= 375) {
      setShowLink(false)
    }
    else{
      setShowLink(true)
    }
  }, [windowSize])


  return (
    <>
      <HollowHeader />

      <ContainerHeader>
        <HeaderLogo>
          <LogoIcon src={IconLogo} alt='league-of-lengeds-icon-default.png' />
          <LogoTitle>My Legends</LogoTitle>
        </HeaderLogo>

        <HeaderNav>
          { showLink && <NavLink /> }
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
