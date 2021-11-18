import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import actions from '../../actions'

import { StyledLogout } from '../../styles/login'

const Logout = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { t } = useTranslation()

  const onClickLogout = () => {
    dispatch(actions.login.logout())
    history.push('/')
  }

  return (
    <StyledLogout onClick={onClickLogout}>{t('header.logout')}</StyledLogout>
  )
}

export default Logout
