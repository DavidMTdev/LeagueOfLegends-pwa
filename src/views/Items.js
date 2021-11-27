import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import actions from '../actions'

import Loading from '../components/loading/Loading'
import Dropdown from '../components/Dropdown'

import { Container } from '../styles/global'
import {
  ItemSContainer,
  ItemSelectedContainer,
  ItemContainer,
  ItemImage,
  Button,
  SelectedBuild
} from '../styles/items'

const Items = () => {
  const dispatch = useDispatch()
  const { i18n } = useTranslation()
  const loading = useSelector(state => state.items.loading)
  const error = useSelector(state => state.items.error)
  const items = useSelector(state => state.items.items)
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

  const onClickAddItem = item => {
    dispatch(actions.build.addItem(item, selectedBuild, builds, tokenBuilds))
  }

  return (
    <Container>
      {loading && <Loading size='1' />}
      {error && <p>error</p>}
      <ItemSContainer>
        <ItemContainer width='70%'>
          {items && (
            <>
              {Object.keys(items).map(key => (
                <ItemImage
                  key={key}
                  onClick={() => onClickSelectItem(key)}
                  src={`http://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/${items[key].image.full}`}
                />
              ))}
            </>
          )}
        </ItemContainer>
        <ItemSelectedContainer>
          {currentItem && (
            <>
              <div>
                <p>{items[currentItem]?.name}</p>
                <p>{items[currentItem]?.plaintext}</p>
              </div>

              <SelectedBuild>
                <Dropdown list={builds} headerOption='Select Item' />
                {selectedBuild != null && (
                  <Button onClick={() => onClickAddItem(items[currentItem])}>
                    Add Item
                  </Button>
                )}
              </SelectedBuild>

              <ItemContainer>
                {items[currentItem]?.into?.map((key, index) => (
                  <div key={index}>
                    <p>{items[key].name}</p>
                    <ItemImage
                      onClick={() => onClickSelectItem(items[key])}
                      src={`http://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/${items[key].image.full}`}
                    />
                  </div>
                ))}
              </ItemContainer>
            </>
          )}
        </ItemSelectedContainer>
      </ItemSContainer>
    </Container>
  )
}

export default Items
