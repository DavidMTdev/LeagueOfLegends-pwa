import { combineReducers } from 'redux'

import theme from './theme'
import champions from './champions'
import login from './login'
import items from './items'

export default combineReducers({ theme, champions, login, items })
