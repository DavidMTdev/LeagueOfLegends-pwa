import styled from 'styled-components'

export const DivContainerChamp = styled.div`
  display: grid;
  grid-template-columns: 20vw 80vw;
  margin-top: 10vh;
  width: 100vw;
  height: 90vh;
`

export const DivChampion = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20vw);
`

export const ChampionDetail = styled.p`
  margin: 0;
  width: 40vw;
`

export const ChampionDetailName = styled.p`
  margin: 0;
  width: 40vw;
  font-weight: bold;
  font-size: 2em;
`

export const BackgroundChamp = styled.div`
  background: linear-gradient(270deg, rgba(0, 0, 0, 0.3), #000000),
    url(${props => props.image});
  background-size: cover;
  height: 95vh;
`

export const ChampInfo = styled.div`
  margin: 5vh;
`

export const SelectView = styled.div`
  display: flex;
  margin: 2vh;
  max-width: 60vw;
`

export const ChoixDetail = styled.p`
  margin: 0;
  width: 100%;
  text-decoration: ${props => props.decoration};
  justify-content: center;
  align-items: center;
`

export const CompetenceImg = styled.img`
  max-heigth: 50px;
`

export const Competence = styled.div`
  width: 60vw;
`

export const SkinImg = styled.img`
  width: 100%;
`
export const StyledCarousel = styled.div`
  position: fixed;
  bottom: 5vh;
`
