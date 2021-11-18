import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import actions from '../actions'

import Loading from '../components/loading/Loading'

const Items = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.items.loading)
  const error = useSelector(state => state.items.error)
  const items = useSelector(state => state.items.items)

  useEffect(() => {
    dispatch(actions.items.fetchItems('11.22.1', 'fr_FR'))
  }, [])

  const showItems = Object.keys(items).map(key => (
    <div key={key}>
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/${items[key].image.full}`}
      />
    </div>
  ))

  return (
    <div>
      {loading && <Loading size='1' />}
      {error && <div>error</div>}
      {items && <div>{showItems}</div>}
    </div>
  )
}

export default Items
