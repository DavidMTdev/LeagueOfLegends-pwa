import styled from 'styled-components'

import NavLink from './NavLink'

import IconLogo from '../../assets/icons/league-of-lengeds-icon-default.png'
// eslint-disable-next-line
import IconSunny from '../../assets/icons/fluent-sunny-filled-icon.svg'
// eslint-disable-next-line
import IconMoon from '../../assets/icons/fluent-moon-filled-icon.svg'
import { ContainerHeader, HeaderLogo, HollowHeader, LogoIcon, LogoTitle } from '../../styles/styledComponents'

const Header = () => {
  return (
    <>
      <HollowHeader />

      <ContainerHeader>
        <HeaderLogo>
          <LogoIcon src={IconLogo} alt='league-of-lengeds-icon-default.png' />
          <LogoTitle>My Legends</LogoTitle>
        </HeaderLogo>

        <NavLink />
      </ContainerHeader>
    </>
  )
}

export default Header
