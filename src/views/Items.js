import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import actions from '../actions'

import Loading from '../components/loading/Loading'
import Dropdown from '../components/Dropdown'

const Items = () => {
  const dispatch = useDispatch()
  const { i18n } = useTranslation()
  const loading = useSelector(state => state.items.loading)
  const error = useSelector(state => state.items.error)
  const items = useSelector(state => state.items.items)
  const token = useSelector(state => state.login.data)
  const builds = useSelector(state => state.build.builds)
  const selectedBuild = useSelector(state => state.build.selectedBuild)
  const tokenBuilds = useSelector(state => state.build.tokenBuilds)
  const [currentItem, setCurrentItem] = useState(null)

  useEffect(() => {
    dispatch(actions.items.fetchItems('11.22.1', i18n.language))
  }, [i18n.language])

  const onClickSelectItem = item => {
    setCurrentItem(item)
  }

  const showItems = Object.keys(items).map(key => (
    <div key={key}>
      <img
        onClick={() => onClickSelectItem(key)}
        src={`http://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/${items[key].image.full}`}
      />
    </div>
  ))

  const onClickAddItem = item => {
    dispatch(actions.build.addItem(item, selectedBuild, builds, tokenBuilds))
  }

  return (
    <div>
      {loading && <Loading size='1' />}
      {error && <p>error</p>}

      {currentItem && (
        <div>
          <div>
            <Dropdown list={builds} header='Add Item' />
            {selectedBuild != null && (
              <button onClick={() => onClickAddItem(items[currentItem])}>
                add
              </button>
            )}
          </div>

          <p>{items[currentItem]?.name}</p>
          <p>{items[currentItem]?.plaintext}</p>

          {items[currentItem]?.into?.map((key, index) => (
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
