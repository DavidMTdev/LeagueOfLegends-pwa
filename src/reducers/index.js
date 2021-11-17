import { combineReducers } from 'redux'

import theme from './theme'
import champions from './champions'
import login from './login'

export default combineReducers({ theme, champions, login })
