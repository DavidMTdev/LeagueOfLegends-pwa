import {
  API_STARTED_CHAMPION,
  API_SUCCESS_CHAMPION,
  API_FAILURE_CHAMPION,
  API_SUCCESS_CHAMPIONS
} from '../config/type'

const initialState = {
  loading: false,
  error: null,
  champions: [],
  champion: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case API_STARTED_CHAMPION:
      return {
        ...state,
        loading: true
      }
    case API_SUCCESS_CHAMPIONS:
      return {
        ...state,
        loading: false,
        champions: action.payload
      }
    case API_SUCCESS_CHAMPION:
      return {
        ...state,
        loading: false,
        champion: action.payload
      }
    case API_FAILURE_CHAMPION:
      return {
        ...state,
        loading: false,
        error: action.payload,
        champions: [],
        champion: {}
      }
    default:
      return state
  }
}
