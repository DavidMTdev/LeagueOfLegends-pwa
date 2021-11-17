import { LOGIN_STATE } from '../actions/login'

const initialState = {
  value: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STATE:
      return {
        ...state,
        value: action.payload
      }
    default:
      return state
  }
}
