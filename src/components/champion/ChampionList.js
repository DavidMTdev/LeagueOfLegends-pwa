import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  ItemChampion,
  ImageSquareChampion,
  DivChampion
} from '../../styles/champions'

const ChampionList = props => {
  const history = useHistory()

  const onClickChampion = name => {
    history.push(`/champions/${name}`)
  }

  return (
    <DivChampion>
      {props.champions.map((item, index) => (
        <ItemChampion key={index} onClick={() => onClickChampion(item.id)}>
          <ImageSquareChampion src={item.images.square} />
          <p>{item.name}</p>
        </ItemChampion>
      ))}
    </DivChampion>
  )
}

ChampionList.propTypes = {
  champions: PropTypes.array
}

export default ChampionList
