import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import actions from '../actions'

import Loading from '../components/loading/Loading'

const Items = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.items.loading)
  const error = useSelector(state => state.items.error)
  const items = useSelector(state => state.items.items)
  const token = useSelector(state => state.login.data)
  const [currentItem, setCurrentItem] = useState(null)

  useEffect(() => {
    dispatch(actions.items.fetchItems('11.22.1', 'fr_FR'))
  }, [])

  const onClickSelectItem = item => {
    setCurrentItem(item)
  }

  const showItems = Object.keys(items).map(key => (
    <div key={key}>
      <img
        onClick={() => onClickSelectItem(items[key])}
        src={`http://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/${items[key].image.full}`}
      />
    </div>
  ))

  return (
    <div>
      {loading && <Loading size='1' />}
      {error && <p>error</p>}

      {currentItem && (
        <div>
          {token && <div>add</div>}
          <p>{currentItem?.name}</p>
          <p>{currentItem?.plaintext}</p>
          {currentItem?.into?.map((key, index) => (
            <div key={index}>
              <p>{items[key].name}</p>
              <img
                onClick={() => onClickSelectItem(items[key])}
                src={`http://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/${items[key].image.full}`}
              />
            </div>
          ))}
        </div>
      )}
      {items && <div>{showItems}</div>}
    </div>
  )
}

export default Items
