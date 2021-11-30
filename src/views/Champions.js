import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import actions from '../actions'

import Loading from '../components/loading/Loading'
import Dropdown from '../components/Dropdown'
import ChampionList from '../components/champion/ChampionList'

import {
  ContainerChampion,
  DivContainerChamp,
  ContainerOption
} from '../styles/champions'

const Champions = () => {
  const dispatch = useDispatch()
  const { i18n } = useTranslation()
  const loading = useSelector(state => state.champions.loading)
  const error = useSelector(state => state.champions.error)
  const champions = useSelector(state => state.champions.champions)

  const version = [
    { name: '11.22.1' },
    { name: '11.21.1' },
    { name: '11.20.1' },
    { name: '11.19.1' },
    { name: '11.18.1' },
    { name: '10.11.1' }
  ]

  useEffect(() => {
    dispatch(actions.champions.fetchChampions('11.22.1', i18n.language))
  }, [i18n.language])

  return (
    <DivContainerChamp>
      <ContainerOption>
        <Dropdown
          list={version}
          headerOption='Select version'
          obj='champions'
        />
      </ContainerOption>
      <ContainerChampion>
        {error && <div>error</div>}
        {loading && <Loading size='1' />}
        {champions && <ChampionList champions={champions} />}
      </ContainerChampion>
    </DivContainerChamp>
  )
}

export default Champions
