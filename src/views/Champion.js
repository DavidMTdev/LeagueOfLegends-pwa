import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import actions from '../actions'

import Loading from '../components/loading/Loading'
import ChampionDetail from '../components/champion/ChampionDetail'

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
    <div>
      {loading && <Loading size='1' />}
      {error && <div>error</div>}
      {champion && (
        <div>
          <ChampionDetail item={champion?.name} />
          <ChampionDetail item={champion?.blurb} />
        </div>
      )}
    </div>
  )
}

export default Champion
