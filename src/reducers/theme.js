import { SWITCH_THEME } from '../config/type'
import { DarkTheme } from '../themes'

const initialState = {
  value: DarkTheme
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        value: action.payload
      }
    default:
      return state
  }
}
