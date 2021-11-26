import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import actions from '../actions'
import Loading from '../components/loading/Loading'
import {
  BackgroundChamp,
  ChampInfo,
  ChampionDetail,
  ChampionDetailName,
  ChoixDetail,
  Competence,
  CompetenceImg,
  SelectView,
  SkinImg
} from '../styles/champions'

const Champion = () => {
  const { name } = useParams()
  const dispatch = useDispatch()
  const { i18n } = useTranslation()
  const loading = useSelector(state => state.champions.loading)
  const error = useSelector(state => state.champions.error)
  const champion = useSelector(state => state.champions.champion)
  const [view, setView] = useState('Vue densemble')
  const [competence, setCompetence] = useState(0)
  const [background, setBackground] = useState(0)

  useEffect(() => {
    dispatch(actions.champions.fetchChampion('11.22.1', i18n.language, name))
  }, [i18n.language])

  return (
    <BackgroundChamp
      image={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion?.id}_${background}.jpg`}
    >
      {loading && <Loading size='1' />}
      {error && <div>error</div>}
      {champion && (
        <div>
          <ChampInfo>
            <ChampionDetailName>{champion?.name}</ChampionDetailName>
            <ChampionDetail>{champion?.title}</ChampionDetail>
          </ChampInfo>

          <SelectView>
            <ChoixDetail
              onClick={() => setView('Vue densemble')}
              decoration={view == 'Vue densemble' ? 'underline' : 'null'}
            >
              Vue d'ensemble
            </ChoixDetail>
            <ChoixDetail
              onClick={() => setView('Competences')}
              decoration={view == 'Competences' ? 'underline' : 'null'}
            >
              Competences
            </ChoixDetail>
            <ChoixDetail
              onClick={() => setView('Skins')}
              decoration={view == 'Skins' ? 'underline' : 'null'}
            >
              Skins
            </ChoixDetail>
          </SelectView>

          {/* Debut Carroussel entre Info / Competences / Skins */}
          {view == 'Vue densemble' ? (
            <ChampionDetail>{champion?.lore}</ChampionDetail>
          ) : null}

          {view == 'Competences' ? (
            <div>
              <SelectView>
                <Competence
                  onClick={() => setCompetence(0)}
                  decoration={competence == 0 ? 'underline' : 'null'}
                >
                  <CompetenceImg
                    src={`https://ddragon.leagueoflegends.com/cdn/11.22.1/img/passive/${champion.passive.image.full}`}
                  />
                  <ChoixDetail>P</ChoixDetail>
                </Competence>

                <Competence
                  onClick={() => setCompetence(1)}
                  decoration={competence == 1 ? 'underline' : 'null'}
                >
                  <CompetenceImg
                    src={`https://ddragon.leagueoflegends.com/cdn/11.22.1/img/spell/${champion.spells[0].image.full}`}
                  />
                  <ChoixDetail>A</ChoixDetail>
                </Competence>

                <Competence
                  onClick={() => setCompetence(2)}
                  decoration={competence == 2 ? 'underline' : 'null'}
                >
                  <CompetenceImg
                    src={`https://ddragon.leagueoflegends.com/cdn/11.22.1/img/spell/${champion.spells[1].image.full}`}
                  />
                  <ChoixDetail>Z</ChoixDetail>
                </Competence>

                <Competence
                  onClick={() => setCompetence(3)}
                  decoration={competence == 3 ? 'underline' : 'null'}
                >
                  <CompetenceImg
                    src={`https://ddragon.leagueoflegends.com/cdn/11.22.1/img/spell/${champion.spells[2].image.full}`}
                  />
                  <ChoixDetail>E</ChoixDetail>
                </Competence>

                <Competence
                  onClick={() => setCompetence(4)}
                  decoration={competence == 4 ? 'underline' : 'null'}
                >
                  <CompetenceImg
                    src={`https://ddragon.leagueoflegends.com/cdn/11.22.1/img/spell/${champion.spells[3].image.full}`}
                  />
                  <ChoixDetail>R</ChoixDetail>
                </Competence>
              </SelectView>

              <div>
                {competence == 0 ? (
                  <ChoixDetail>{champion.passive.description}</ChoixDetail>
                ) : (
                  <ChoixDetail>
                    {champion.spells[competence - 1].description}
                  </ChoixDetail>
                )}
              </div>
            </div>
          ) : null}

          {view == 'Skins' ? (
            <div>
              {champion.skins.map(item => (
                <>
                  <ChampionDetail>
                    {item.name == 'default' ? champion.name : item.name}
                  </ChampionDetail>
                  <SkinImg
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${item.num}.jpg`}
                  ></SkinImg>
                </>
              ))}
            </div>
          ) : null}
        </div>
      )}
    </BackgroundChamp>
  )
}

export default Champion
