import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import actions from '../actions'
import { DivChampion, DivContainerChamp } from '../styles/champions'

const Champions = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const loading = useSelector(state => state.champions.loading)
  const error = useSelector(state => state.champions.error)
  const champions = useSelector(state => state.champions.champions)

  useEffect(() => {
    dispatch(actions.champions.fetchChampions('11.22.1', 'fr_FR'))
  }, [])

  const onClickChampion = name => {
    history.push(`/champions/${name}`)
  }

  const showChampions = champions.map((item, index) => (
    <div key={index} onClick={() => onClickChampion(item.id)}>
      <img src={item.images.square} />
      <div>{item.name}</div>
    </div>
  ))

  return (
    <DivContainerChamp>
      <div></div>
      {loading && <div>loading</div>}
      {error && <div>error</div>}
      {champions && <DivChampion> {showChampions} </DivChampion>}
    </DivContainerChamp>
  )
}

export default Champions
