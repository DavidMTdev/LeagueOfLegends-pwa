import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ContainerNavLink = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 20px;
`

const StyledLink = styled(Link)`
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

const InputSubmit = styled.input`
  background: linear-gradient(to bottom,#08abac 0,#01698b 100%)
`

const ContainerDivLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 20px;
`

const FormLogin = styled.form`

`


export {ContainerNavLink, StyledLink, HollowHeader, ContainerHeader, HeaderLogo, LogoTitle, LogoIcon, InputSubmit, ContainerDivLogin, FormLogin}
