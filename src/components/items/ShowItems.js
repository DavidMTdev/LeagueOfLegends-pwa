import React from 'react'

import { ItemImage } from '../styles/items'

const ShowItems = props => {
  if (!props.items) return null

  return (
    <>
      {Object.keys(props.items).map(key => (
        <ItemImage
          key={key}
          onClick={() => onClickSelectItem(key)}
          src={`http://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/${items[key].image.full}`}
        />
      ))}
    </>
  )
}

export default ShowItems
