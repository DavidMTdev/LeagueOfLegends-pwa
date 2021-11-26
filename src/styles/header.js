import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerNav = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  /* margin: 0 10px; */
`

export const ThemeIcon = styled.svg`
  width: 32px;
  height: 32px;
  fill: ${props => props.theme.secondary};
  margin-left: 20px;
`

export const NavTranslation = styled.div`
  /* font-family: 'FrizQuadrata'; */
  font-weight: bold;
  padding: 0 10px;
  color: ${props => props.theme.secondary};
  background-color: ${props => props.theme.primary};
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledLink = styled(Link)`
  font-family: 'FrizQuadrata';
  font-weight: bold;
  padding: 0 10px;
  color: ${props => props.theme.secondary};
  background-color: ${props => props.theme.primary};
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => props.theme.primaryHover};
  }
`

export const HollowHeader = styled.div`
  margin-top: 5vh;
`

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5vh;
  background-color: ${props => props.theme.primary};
`

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 20px;
`

export const LogoTitle = styled.div`
  color: ${props => props.theme.secondary};
  font-family: 'FrizQuadrata';
  font-weight: bold;
  margin-left: 10px;
`

export const LogoIcon = styled.img`
  width: 32px;
  height: 32px;
`
