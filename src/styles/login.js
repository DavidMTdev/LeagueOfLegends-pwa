import styled from 'styled-components'

export const InputStyled = styled.input`
  height: 5vh;
  background-color: #1e2328;
  margin: 5px;
  border: 2px solid;
  border-color: #c8aa6e;
  max-width: 30vw;
  min-width: 30vw;
`

export const InputSubmit = styled.input`
  background-color: #1e2328;
  border: 2px solid rgba(192, 252, 253, 0.7);
  margin: 20px;
  max-width: 30vw;
  min-height: 5vh;
  color: white;
`

export const ContainerDivLogin = styled.div`
  padding-top: 5vh;
  display: grid;
  grid-template-rows: 30vh 50vh;
  align-items: center;
  justify-content: center;
  width: 100vw;
`

export const ImgLeague = styled.img`
  max-width: 45vw;
`

export const FormLogin = styled.form`
  display: grid;
  justify-content: center;
`

export const ImageBackground = styled.div`
  background-image: url('https://am-a.akamaihd.net/image?resize=1519:&quality=preserve&f=https://lolstatic-a.akamaihd.net/frontpage/apps/prod/playnow-global/fr_FR/f9caf54ff66c997b27b3d15cc7cf23212c91fb43/assets/img/vi_bluebuff.jpg');
  background-size: cover;
  width: 100vw;
  height: 95vh;
`

export const StyledLogout = styled.div`
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
