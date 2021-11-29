import styled from 'styled-components'
import devices from '../config/devices'

export const DivContainerChamp = styled.div`
  display: flex;
  padding: 5% 0;
  width: 100%;

  @media ${devices.mobile} {
    padding: 10% 0;
    flex-direction: column;
  }
`

export const ContainerChampion = styled.div``

export const DivChampion = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  @media ${devices.laptop} {
    grid-template-columns: repeat(6, 1fr);
  }

  @media ${devices.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${devices.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ContainerOption = styled.div`
  width: auto;
  margin: 0 5%;

  @media ${devices.mobile} {
    margin-bottom: 5%;
  }
`

export const ItemChampion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImageSquareChampion = styled.img`
  width: 100px;
  height: 100px;

  @media ${devices.mobile} {
    width: 50px;
    height: 50px;
  }
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

  @media (max-width: 1032px) {
    background-position: 100%;
  }
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
