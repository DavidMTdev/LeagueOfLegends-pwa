/* eslint-disable react/prop-types */
import {
  LoadingContainer,
  LoadingPoints,
  LoadingItem
} from '../../styles/loading'

import loading from '../../assets/utils/loading.json'

const Loading = props => {
  return (
    <LoadingContainer>
      <LoadingPoints size={80 / props.size}>
        {loading.items.map((item, index) => (
          <LoadingItem
            key={index}
            child={index + 1}
            delay={item.delay}
            top={item.top / props.size}
            left={item.left / props.size}
            size={loading.size / props.size}
          />
        ))}
      </LoadingPoints>
    </LoadingContainer>
  )
}

export default Loading
