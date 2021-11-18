import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import actions from '../../actions'

import { StyledLogout } from '../../styles/login'

const Logout = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onClickLogout = () => {
    dispatch(actions.login.logout())
    history.push('/')
  }

  return <StyledLogout onClick={onClickLogout}>Logout</StyledLogout>
}

export default Logout
