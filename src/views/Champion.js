import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import actions from '../actions'

import Loading from '../components/loading/Loading'
import { BackgroundChamp, ChampionDetail } from '../styles/champions'

const Champion = () => {
  const { name } = useParams()
  const dispatch = useDispatch()
  const loading = useSelector(state => state.champions.loading)
  const error = useSelector(state => state.champions.error)
  const champion = useSelector(state => state.champions.champion)

  useEffect(() => {
    dispatch(actions.champions.fetchChampion('11.22.1', 'fr_FR', name))
  }, [])

  return (
    <BackgroundChamp>
      {loading && <Loading size='1' />}
      {error && <div>error</div>}
      {champion && (
        <div>
          <ChampionDetail>{champion?.name}</ChampionDetail>
          <ChampionDetail>{champion?.blurb}</ChampionDetail>
        </div>
      )}
    </BackgroundChamp>
  )
}

export default Champion
