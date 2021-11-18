import {
  API_STARTED_CHAMPION,
  API_SUCCESS_CHAMPION,
  API_FAILURE_CHAMPION
} from '../config/type'

const initialState = {
  loading: false,
  error: null,
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case API_STARTED_CHAMPION:
      return {
        ...state,
        loading: true
      }
    case API_SUCCESS_CHAMPION:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case API_FAILURE_CHAMPION:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: []
      }
    default:
      return state
  }
}
