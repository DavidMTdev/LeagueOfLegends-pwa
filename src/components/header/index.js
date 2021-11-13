import styled from 'styled-components'

import NavLink from './NavLink'

import IconLogo from '../../assets/icons/league-of-lengeds-icon-default.png'
import IconSunny from '../../assets/icons/fluent-sunny-filled-icon.svg'
import IconMoon from '../../assets/icons/fluent-moon-filled-icon.svg'

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

const HollowHeader = styled.div`
  margin-top: 5vh;
`
const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 5vh;
  background-color: ${props => props.theme.primary};
`

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

const LogoTitle = styled.div`
  color: ${props => props.theme.secondary};
  font-family: 'FrizQuadrata';
  font-weight: bold;
  margin-left: 10px;
`

const LogoIcon = styled.img`
  width: 32px;
  height: 32px;
`

export default Header
